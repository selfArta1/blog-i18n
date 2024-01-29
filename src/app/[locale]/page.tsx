import Image from "next/image";
import { useTranslations } from "next-intl";

import { getTranslations } from "next-intl/server";

type Props = {
  params: { locale: string };
};

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}) {
  console.log("locale: = " + locale);
  const t = await getTranslations({ locale, namespace: "Index" });

  return {
    title: t("header"),
  };
}

export default function Home() {
  const t = useTranslations("Index");
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>{t("title")}</h1>
      <h1>
        如果您需要兼容性最好的字体，可以选择
        TTF。如果您需要文件体积小、加载速度快的字体，可以选择
        WOFF2。如果您需要支持更多字符和特性的字体，可以选择 OTF。
      </h1>
      <p>
        ample, using the following libraries, you can look at an incoming
        Request to determine which locale to select, based on the Headers,
        locales you plan to support, and the default locale.
      </p>
    </main>
  );
}
