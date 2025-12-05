import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Async API call for making payment
export const makePayment = createAsyncThunk(
  "payment/makePayment",
  async ({ courseId, amount }, { rejectWithValue, getState }) => {
    try {
      const { user } = getState().auth; // assume auth slice exists with token
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user.token}`, // JWT token
        },
      };

      const response = await axios.post(
        "/api/v1/coursePayment",
        { courseId, amount },
        config
      );

      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data.message || "Payment Failed");
    }
  }
);

const paymentSlice = createSlice({
  name: "payment",
  initialState: {
    status: "idle", // idle | loading | succeeded | failed
    data: null,
    error: null,
  },
  reducers: {
    resetPaymentState: (state) => {
      state.status = "idle";
      state.data = null;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(makePayment.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(makePayment.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload.payment;
      })
      .addCase(makePayment.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export const { resetPaymentState } = paymentSlice.actions;
export default paymentSlice.reducer;
