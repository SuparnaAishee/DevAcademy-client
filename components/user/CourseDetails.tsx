"use client"

import { useState, useEffect } from "react"
import LectureList from "./LectureList"

interface Course {
  id: string
  title: string
  price: number
  description: string
  thumbnail: string
  instructor: string
  reviews: { id: string; rating: number; comment: string }[]
}

export default function CourseDetails({ courseId }: { courseId: string }) {
  const [course, setCourse] = useState<Course | null>(null)

  useEffect(() => {
    // TODO: Fetch course details from API
    setCourse({
      id: courseId,
      title: "Introduction to React",
      price: 49.99,
      description: "Learn the basics of React",
      thumbnail: "/placeholder.jpg",
      instructor: "John Doe",
      reviews: [
        { id: "1", rating: 5, comment: "Great course!" },
        { id: "2", rating: 4, comment: "Very informative" },
      ],
    })
  }, [courseId])

  if (!course) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <div className="mb-8">
        <img
          src={course.thumbnail || "/placeholder.svg"}
          alt={course.title}
          className="w-full h-64 object-cover rounded-lg mb-4"
        />
        <h1 className="text-3xl font-bold mb-2">{course.title}</h1>
        <p className="text-xl text-gray-600 mb-4">${course.price.toFixed(2)}</p>
        <p className="text-gray-700 mb-4">{course.description}</p>
        <p className="text-gray-600 mb-4">Instructor: {course.instructor}</p>
      </div>
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Course Content</h2>
        <LectureList courseId={courseId} />
      </div>
      <div>
        <h2 className="text-2xl font-bold mb-4">Reviews</h2>
        {course.reviews.map((review) => (
          <div key={review.id} className="mb-4">
            <p className="font-bold">Rating: {review.rating}/5</p>
            <p>{review.comment}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

