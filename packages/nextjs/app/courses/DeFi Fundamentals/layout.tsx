import Link from 'next/link'
import Header from '../../../components/LandingPage/Header'
import Footer from '../../../components/LandingPage/Footer'

export default function CourseLayout({ children, params }:any) {
  // This would typically come from a database or API based on the courseId
  const lessons = [
    { id: 1, title: 'Introduction to DeFi' },
    { id: 2, title: 'Understanding Liquidity Pools' },
    { id: 3, title: 'Yield Farming Strategies' },
    { id: 4, title: 'Risk Management in DeFi' },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-grow flex">
        <aside className="w-64 bg-gray-100 p-6">
          <h2 className="text-xl font-semibold mb-4">Course Contents</h2>
          <nav>
            <ul className="space-y-2">
              {lessons.map((lesson) => (
                <li key={lesson.id}>
                  <Link
                    href={`/courses/${params.courseId}/${lesson.id}`}
                    className="text-blue-600 hover:underline"
                  >
                    {lesson.title}
                  </Link>
                </li>
              ))}
</ul>
          </nav>
        </aside>
        <main className="flex-grow p-8">
          {children}
        </main>
      </div>
      <Footer />
    </div>
  )
}

