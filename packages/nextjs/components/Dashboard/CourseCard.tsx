import Link from 'next/link'

interface CourseCardProps {
  id: number
  title: string
  progress: number
}

export default function CourseCard({ id, title, progress }: CourseCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <div className="mb-4 bg-gray-200 rounded-full h-2.5">
        <div
          className="bg-blue-600 h-2.5 rounded-full"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <p className="text-gray-600 mb-4">{progress}% complete</p>
      <Link
        href={`/courses/${id}`}
        className="inline-block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
      >
        {progress === 0 ? 'Start Course' : 'Continue Learning'}
      </Link>
    </div>
  )
}

