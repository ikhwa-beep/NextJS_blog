"use server";
import fs from "node:fs/promises";
import { revalidatePath } from "next/cache";

export async function uploadFile(formData) {
  const file = formData.get("file")
  const arrayBuffer = await file.arrayBuffer();
  const buffer = new Uint8Array(arrayBuffer);

  await fs.writeFile(`./posts/${file.name}`, buffer);

  revalidatePath("/");
}

import Image from "next/image";
import fs from "node:fs/promises";

import UploadForm from "./UploadForm";

export default async function Dashboard() {
  const files = await fs.readdir("./posts");
  const images = files
    .filter((file) => file.endsWith(".md"))
    .map((file) => `/uploads/${file}`);

  return (
    <main>
      <UploadForm />
      <div className="flex flex-wrap">
        {images.map((image) => (
          <div key={image} className="px-2 h-auto w-1/2">
            <Image
              key={image}
              src={image}
              width={400}
              height={400}
              alt={image}
              className="object-cover w-full"
            />
          </div>
        ))}
      </div>
    </main>
  );
}

export async function getServerSideProps(context) {
    const token = context.req.cookies.token;
    if (!token) {
      return {
        redirect: {
          destination: '/login',
          permanent: false,
        },
      };
    }
    try {
      jwt.verify(token, 'your_secret_key');
      return { props: {} };
    } catch (err) {
      return {
        redirect: {
          destination: '/login',
          permanent: false,
        },
      };
    }
  }