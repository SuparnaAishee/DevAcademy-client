import axios from "axios";
import type { Module } from "../Types/moduleType"; 

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api";


const axiosInstance = axios.create({
  baseURL: API_URL,
  headers: { "Content-Type": "application/json" },
});

// Attach Authorization token to each request if available
axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem("accessToken");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const moduleService = {

  async getModulesByCourse(courseId: string): Promise<Module[]> {
    try {
      const response = await axiosInstance.get<Module[]>(
        `/module/course/${courseId}`
      ); 
      console.log("Modules fetched successfully:", response.data);
      return response.data;
    } catch (error) {
      console.error("Error fetching modules:", error);
      throw new Error("Failed to fetch modules");
    }
  },

  async getModuleById(moduleId: string): Promise<Module> {
    try {
      const response = await axiosInstance.get<Module>(`/module/${moduleId}`);
      console.log("Module fetched successfully:", response.data);
      return response.data;
    } catch (error) {
      console.error("Error fetching module by ID:", error);
      throw new Error("Failed to fetch module by ID");
    }
  },

  
  async getLecturesByModule(moduleId: string): Promise<any[]> {
    try {
      const response = await axiosInstance.get<any[]>(
        `/lectures/module/${moduleId}`
      );
      console.log("Lectures fetched successfully:", response.data);
      return response.data;
    } catch (error) {
      console.error("Error fetching lectures:", error);
      throw new Error("Failed to fetch lectures");
    }
  },
};
