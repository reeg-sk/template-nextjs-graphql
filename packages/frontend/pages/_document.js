import { Html, Head, Main, NextScript } from 'next/document'


export default function Document() { // https://nextjs.org/docs/advanced-features/custom-document
  return (
    <Html lang="en">
      <Head />
      <body className="bg-gray-50 dark:bg-zinc-900 dark:text-gray-50">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
