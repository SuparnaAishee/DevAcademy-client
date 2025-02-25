import axios from "axios";
import type { CourseResponse, CourseFilters } from "../Types/courseType";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api";


const axiosInstance = axios.create({
  baseURL: API_URL,
  headers: { "Content-Type": "application/json" },
});

axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem("accessToken");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const courseService = {
  async getCourses(filters?: CourseFilters): Promise<CourseResponse> {
    try {
      const queryParams = new URLSearchParams();

      if (filters) {
        Object.entries(filters).forEach(([key, value]) => {
          if (value !== undefined) {
            queryParams.append(key, value.toString());
          }
        });
      }

     
      const response = await axiosInstance.get<CourseResponse>(
        `/course?${queryParams.toString()}`
      );
      console.log("Courses fetched successfully:", response.data);
      return response.data;
    } catch (error) {
      console.error("Error fetching courses:", error);
      throw new Error("Failed to fetch courses");
    }
  },

  // Fetch course details by ID
  async getCourseById(id: string): Promise<CourseResponse> {
    try {
      const response = await axiosInstance.get<CourseResponse>(`/course/${id}`);
      console.log("Course fetched successfully:", response.data);
      return response.data;
    } catch (error) {
      console.error("Error fetching course by ID:", error);
      throw new Error("Failed to fetch course by ID");
    }
  },
};
