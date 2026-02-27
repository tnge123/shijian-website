'use client'

import { useState, useEffect } from 'react'
import { Menu, X, ChevronRight, Users, Cloud, Database, FileText, TrendingUp, Building2, Phone, Mail, MapPin } from 'lucide-react'

// Navigation Component
const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { label: '首页', href: '#home' },
    { label: '解决方案', href: '#solutions' },
    { label: '服务体系', href: '#services' },
    { label: '客户案例', href: '#cases' },
    { label: '管理洞察', href: '#insights' },
    { label: '关于我们', href: '#about' },
  ]

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center mr-3">
              <span className="text-white font-bold text-xl">实</span>
            </div>
            <div>
              <h1 className={`font-bold text-lg ${isScrolled ? 'text-gray-900' : 'text-white'}`}>北京实见</h1>
              <p className={`text-xs ${isScrolled ? 'text-gray-500' : 'text-white/80'}`}>信息技术有限公司</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition-colors hover:text-primary ${isScrolled ? 'text-gray-700' : 'text-white/90'}`}
              >
                {item.label}
              </a>
            ))}
            <button className="bg-primary text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-primary-700 transition-colors">
              联系我们
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className={isScrolled ? 'text-gray-900' : 'text-white'} size={24} />
            ) : (
              <Menu className={isScrolled ? 'text-gray-900' : 'text-white'} size={24} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-4 py-4 space-y-3">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block text-gray-700 hover:text-primary py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <button className="w-full bg-primary text-white px-6 py-3 rounded-full text-sm font-medium">
              联系我们
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}

// Hero Component
const Hero = () => {
  return (
    <section id="home" className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-900 via-primary-700 to-primary-600">
        <div className="absolute inset-0 bg-black/20" />
        {/* Abstract shapes */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-8">
          <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse" />
          <span className="text-white/90 text-sm">AI 智能访谈系统全新上线</span>
        </div>
        
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
          扩大访谈范围<br />
          <span className="text-primary-200">深度质性分析</span>
        </h1>
        
        <p className="text-xl sm:text-2xl text-white/80 mb-4">
          AI访谈
        </p>
        
        <p className="text-white/60 mb-10 max-w-2xl mx-auto">
          专业×技术，释放管理动能 —— 服务国央企的人力资源整合服务商
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-white text-primary px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors flex items-center justify-center">
            申请试用
            <ChevronRight className="ml-2" size={20} />
          </button>
          <button className="bg-white/10 backdrop-blur-sm text-white border border-white/30 px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/20 transition-colors">
            了解更多
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
          <div className="w-1 h-3 bg-white/50 rounded-full" />
        </div>
      </div>
    </section>
  )
}

// Product Card Component
interface ProductCardProps {
  icon: React.ReactElement
  title: string
  subtitle?: string
  features: string[]
  stat?: string
  statLabel?: string
  color: 'primary' | 'blue'
}

const colorClasses = {
  primary: { bg: 'bg-primary-50', text: 'text-primary-600' },
  blue: { bg: 'bg-blue-50', text: 'text-blue-600' },
}

const ProductCard = ({ icon, title, subtitle, features, stat, statLabel, color = 'primary' }: ProductCardProps) => {
  const colors = colorClasses[color]
  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow p-6 border border-gray-100 group">
      <div className={`w-14 h-14 ${colors.bg} rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
        <div className={colors.text}>{icon}</div>
      </div>
      
      <h3 className="text-xl font-bold text-gray-900 mb-1">{title}</h3>
      {subtitle && <p className="text-sm text-gray-500 mb-4">{subtitle}</p>}
      
      <ul className="space-y-2 mb-5">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start text-sm text-gray-600">
            <span className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 mr-2 flex-shrink-0" />
            {feature}
          </li>
        ))}
      </ul>
      
      {stat && (
        <div className="pt-4 border-t border-gray-100">
          <div className="flex items-baseline">
            <span className="text-3xl font-bold text-primary">{stat}</span>
            <span className="text-sm text-gray-500 ml-2">{statLabel}</span>
          </div>
        </div>
      )}
    </div>
  )
}

// Products Section
const ProductsSection = () => {
  const products: ProductCardProps[] = [
    {
      icon: <Users size={28} />,
      title: 'AI访谈',
      features: ['访谈大纲设置', '并发50+', '分析报告自定义', '高度拟人化'],
      color: 'primary',
    },
    {
      icon: <Cloud size={28} />,
      title: '宏景云',
      subtitle: '云测评',
      features: ['扫码打分', '评估表自定义', '评估关系快速配置', '结果自动统计'],
      stat: '5000万+',
      statLabel: '累计打分数据',
      color: 'blue',
    },
    {
      icon: <Database size={28} />,
      title: 'HCM系统',
      features: ['全模块覆盖', '实施服务保障', '3000+国企选择', '国产化适配'],
      color: 'primary',
    },
    {
      icon: <FileText size={28} />,
      title: '干部人事档案',
      features: ['数字采集', '规范管理', '高效利用', '集团化管理'],
      color: 'primary',
    },
    {
      icon: <TrendingUp size={28} />,
      title: '人才发展',
      features: ['素质模型', '人才评估', '人才盘点', '继任管理', '人才库'],
      color: 'primary',
    },
  ]

  return (
    <section id="solutions" className="py-20 bg-secondary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">核心产品</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            为国央企提供全方位的人力资源数字化解决方案
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.slice(0, 3).map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 max-w-4xl mx-auto">
          {products.slice(3).map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
      </div>
    </section>
  )
}

// Architecture Section
const ArchitectureSection = () => {
  const [activeTab, setActiveTab] = useState(0)
  const [isAutoPlay, setIsAutoPlay] = useState(true)
  const [isHovered, setIsHovered] = useState(false)
  
  const tabs = [
    {
      title: '总体框架',
      content: {
        title: '企业人力资源数字化转型总体框架',
        description: '基于多年服务国央企的实践经验，构建覆盖"规划-建设-运营"全周期的数字化转型体系，助力企业实现人力资源管理的数字化、智能化升级。',
        points: ['顶层设计规划', '数字化平台建设', '数据治理体系', '持续运营优化'],
      }
    },
    {
      title: '核心业务',
      content: {
        title: '人力资源管理核心业务解决方案',
        description: '覆盖组织管理、干部管理、薪酬绩效、招聘培训等全业务场景，提供标准化与定制化相结合的服务模式。',
        points: ['组织架构管理', '干部选拔任用', '薪酬绩效管理', '人才招聘培养'],
      }
    },
    {
      title: '创新方案',
      content: {
        title: 'AI驱动的创新应用方案',
        description: '运用人工智能、大数据等前沿技术，打造智能化人力资源管理工具，提升管理效率与决策质量。',
        points: ['AI智能访谈', '人才画像分析', '智能推荐系统', '预测性分析'],
      }
    },
    {
      title: '管理咨询',
      content: {
        title: '专业管理咨询服务',
        description: '依托深厚的行业积累和专业的咨询团队，为企业提供人力资源管理诊断、体系优化等咨询服务。',
        points: ['组织架构优化', '人才体系设计', '薪酬体系改革', '绩效体系构建'],
      }
    },
    {
      title: '运维服务',
      content: {
        title: '全生命周期运维保障',
        description: '提供7×24小时技术支持，确保系统稳定运行，持续为企业创造价值。',
        points: ['系统运维支持', '数据安全保障', '功能迭代升级', '用户培训服务'],
      }
    },
  ]

  useEffect(() => {
    if (!isAutoPlay || isHovered) return
    
    const interval = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % tabs.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [isAutoPlay, isHovered, tabs.length])

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">业务架构</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            全方位的服务体系，助力企业人力资源管理数字化转型
          </p>
        </div>
        
        {/* Auto-play control */}
        <div className="flex justify-center mb-6">
          <button
            onClick={() => setIsAutoPlay(!isAutoPlay)}
            className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-full text-sm text-gray-600 transition-colors focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
            aria-label={isAutoPlay ? '暂停自动切换' : '开始自动切换'}
          >
            {isAutoPlay ? (
              <>
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <rect x="6" y="4" width="4" height="12" rx="1" />
                  <rect x="12" y="4" width="4" height="12" rx="1" />
                </svg>
                <span>暂停轮播</span>
              </>
            ) : (
              <>
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M4 4l12 6-12 6z" />
                </svg>
                <span>自动轮播</span>
              </>
            )}
          </button>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Tabs */}
          <div className="lg:w-1/3">
            <div className="space-y-2">
              {tabs.map((tab, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTab(index)}
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                  className={`w-full text-left px-6 py-4 rounded-xl transition-all duration-200 ease-out focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 ${
                    activeTab === index
                      ? 'bg-primary text-white shadow-lg'
                      : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                  }`}
                  aria-selected={activeTab === index}
                  role="tab"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-semibold">{tab.title}</span>
                    <ChevronRight 
                      className={`transform transition-transform duration-200 ease-out ${activeTab === index ? 'rotate-90' : ''}`} 
                      size={18} 
                    />
                  </div>
                  {/* Progress bar for active tab */}
                  {activeTab === index && isAutoPlay && (
                    <div className="mt-3 h-0.5 bg-white/30 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-white/80 rounded-full animate-progress"
                        style={{ animationDuration: '4s' }}
                      />
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>
          
          {/* Content */}
          <div 
            className="lg:w-2/3"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div 
              key={activeTab}
              className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 h-full tab-content-enter"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {tabs[activeTab].content.title}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {tabs[activeTab].content.description}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {tabs[activeTab].content.points.map((point, index) => (
                  <div 
                    key={index} 
                    className="flex items-center bg-white rounded-lg p-4 shadow-sm card-lift"
                  >
                    <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center mr-3">
                      <span className="text-primary font-bold text-sm">{index + 1}</span>
                    </div>
                    <span className="text-gray-700 font-medium">{point}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// Clients Section
const ClientsSection = () => {
  const clients = [
    { name: '中国石油', industry: '能源' },
    { name: '中国移动', industry: '通信' },
    { name: '中国建筑', industry: '建筑' },
    { name: '国家电网', industry: '电力' },
    { name: '中国铁建', industry: '交通' },
    { name: '中国中车', industry: '制造' },
    { name: '中国船舶', industry: '船舶' },
    { name: '中国航空', industry: '航空' },
  ]

  return (
    <section id="cases" className="py-20 bg-secondary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">客户案例</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            已服务超过3000家国央企，深受客户信赖
          </p>
        </div>
        
        {/* Logo Wall */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-12">
          {clients.map((client, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 flex flex-col items-center justify-center shadow-sm hover:shadow-md transition-shadow group"
            >
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-3 group-hover:bg-primary/10 transition-colors">
                <Building2 className="text-gray-400 group-hover:text-primary" size={28} />
              </div>
              <span className="font-semibold text-gray-800 text-center">{client.name}</span>
              <span className="text-xs text-gray-500 mt-1">{client.industry}</span>
            </div>
          ))}
        </div>
        
        {/* Case Study */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/2">
              <div className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium mb-4">
                标杆案例
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                某大型央企集团人力资源数字化转型项目
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                通过部署HCM系统和AI访谈平台，该集团实现了人力资源管理的全面数字化，访谈效率提升300%，数据分析准确率提升50%，为集团人才决策提供了强有力的数据支撑。
              </p>
              <div className="flex gap-8">
                <div>
                  <div className="text-3xl font-bold text-primary">300%</div>
                  <div className="text-sm text-gray-500">效率提升</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">50%</div>
                  <div className="text-sm text-gray-500">准确率提升</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">10万+</div>
                  <div className="text-sm text-gray-500">员工覆盖</div>
                </div>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="bg-gradient-to-br from-primary-100 to-primary-50 rounded-xl p-8 h-64 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="text-white" size={40} />
                  </div>
                  <p className="text-gray-700 font-medium">数字化转型成效显著</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// Insights Section
const InsightsSection = () => {
  const articles = [
    {
      title: '国企人力资源数字化转型的实践与思考',
      summary: '探讨国有企业在数字化转型过程中的关键要素和成功经验，为同行业企业提供参考借鉴。',
      date: '2024-02-20',
      category: '行业洞察',
    },
    {
      title: 'AI技术在干部考核评价中的应用探索',
      summary: '分析人工智能技术如何赋能干部考核评价工作，提升评价的客观性和科学性。',
      date: '2024-02-15',
      category: '技术应用',
    },
    {
      title: '新质生产力背景下的人才管理创新',
      summary: '解读新质生产力对人才管理提出的新要求，分享创新的人才管理实践案例。',
      date: '2024-02-10',
      category: '管理创新',
    },
  ]

  return (
    <section id="insights" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">管理洞察</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            分享行业前沿动态与管理智慧
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <article
              key={index}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow overflow-hidden border border-gray-100 group cursor-pointer"
            >
              <div className="h-48 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center group-hover:from-primary/5 group-hover:to-primary/10 transition-colors">
                <FileText className="text-gray-300 group-hover:text-primary/30" size={48} />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">{article.category}</span>
                  <span className="text-xs text-gray-400">{article.date}</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors line-clamp-2">
                  {article.title}
                </h3>
                <p className="text-gray-600 text-sm line-clamp-2">
                  {article.summary}
                </p>
                <div className="mt-4 flex items-center text-primary text-sm font-medium">
                  阅读更多
                  <ChevronRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

// Footer Component
const Footer = () => {
  return (
    <footer id="about" className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center mr-3">
                <span className="text-white font-bold text-xl">实</span>
              </div>
              <div>
                <h3 className="font-bold">北京实见</h3>
                <p className="text-xs text-gray-400">信息技术有限公司</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              专业×技术，释放管理动能<br />
              服务国央企的人力资源整合服务商
            </p>
          </div>
          
          {/* Solutions */}
          <div>
            <h4 className="font-semibold mb-4">解决方案</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">AI访谈</a></li>
              <li><a href="#" className="hover:text-white transition-colors">宏景云测评</a></li>
              <li><a href="#" className="hover:text-white transition-colors">HCM系统</a></li>
              <li><a href="#" className="hover:text-white transition-colors">干部人事档案</a></li>
              <li><a href="#" className="hover:text-white transition-colors">人才发展</a></li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">服务体系</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">总体框架</a></li>
              <li><a href="#" className="hover:text-white transition-colors">核心业务</a></li>
              <li><a href="#" className="hover:text-white transition-colors">创新方案</a></li>
              <li><a href="#" className="hover:text-white transition-colors">管理咨询</a></li>
              <li><a href="#" className="hover:text-white transition-colors">运维服务</a></li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">关于我们</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-center">
                <MapPin size={16} className="mr-2 text-primary" />
                北京市海淀区中关村
              </li>
              <li className="flex items-center">
                <Phone size={16} className="mr-2 text-primary" />
                400-XXX-XXXX
              </li>
              <li className="flex items-center">
                <Mail size={16} className="mr-2 text-primary" />
                contact@shijian.com
              </li>
            </ul>
          </div>
        </div>
        
        {/* Divider */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
            <p>© 2024 北京实见信息技术有限公司 版权所有</p>
            <p className="mt-2 md:mt-0">京ICP备XXXXXXXX号-1 | 京公网安备XXXXXXXXXXX号</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

// Main Page Component
export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <ProductsSection />
      <ArchitectureSection />
      <ClientsSection />
      <InsightsSection />
      <Footer />
    </main>
  )
}