import "@/styles/tailwind.css"
import "@/styles/fonts.css"
import type { AppProps } from "next/app"
import { DescribeRoute } from "@/components/Meta/DescribeRoute"
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <DescribeRoute
      title="TedxChula"
      description="TedxChula"
    >
        <Component {...pageProps} />
    </DescribeRoute>
  )
}
export default MyApp
