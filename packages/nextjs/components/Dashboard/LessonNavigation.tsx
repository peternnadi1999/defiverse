import Link from 'next/link'

interface LessonNavigationProps {
  courseId: string
  lessonId: string
}

export default function LessonNavigation({ courseId, lessonId }: LessonNavigationProps) {
  const currentLessonId = parseInt(lessonId)

  return (
    <div className="flex justify-between items-center mt-8">
      {currentLessonId > 1 && (
        <Link
          href={`/courses/${courseId}/${currentLessonId - 1}`}
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
        >
          Previous Lesson
        </Link>
      )}
      <Link
        href={`/courses/${courseId}/${currentLessonId + 1}`}
        className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 ml-auto"
      >
        Next Lesson
      </Link>
    </div>
  )
}

