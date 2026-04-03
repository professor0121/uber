import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "@/services/axiosInstance";
import { AxiosError } from "axios";

type Method = "get" | "post" | "put" | "delete";

interface ThunkConfig<B> {
  typePrefix: string;
  url: string;
  method?: Method;
}

export const createApiThunk = <Response, Body = void>({
  typePrefix,
  url,
  method = "get",
}: ThunkConfig<Body>) => {
  return createAsyncThunk<Response, Body, { rejectValue: string }>(
    typePrefix,
    async (body, thunkAPI) => {
      try {
        const response = await axiosInstance({
          url,
          method,
          data: body,
        });
        return response.data as Response;
      } catch (err) {
        const error = err as AxiosError<{ message?: string }>;

        return thunkAPI.rejectWithValue(
          error.response?.data?.message || "Something went wrong"
        );
      }
    }
  );
};