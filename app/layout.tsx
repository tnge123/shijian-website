import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '北京实见信息技术有限公司 - 专业×技术，释放管理动能',
  description: '服务国央企的人力资源整合服务商，提供AI访谈、宏景云测评、HCM系统、干部人事档案管理、人才发展等一站式解决方案。',
  keywords: '人力资源,国央企,AI访谈,云测评,HCM系统,干部档案,人才发展',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN">
      <body className={inter.className}>{children}</body>
    </html>
  )
}