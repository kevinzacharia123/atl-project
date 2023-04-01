import { writable } from "svelte/store";
import Home from "./pages/Home.svelte";
import Lawyers from "./pages/Lawyers.svelte";
import LegalAdvice from "./pages/LegalAdvice.svelte";
import About from "./pages/About.svelte";

export const pages = {
  Home,
  Lawyers,
  LegalAdvice,
  About,
};
export const page = writable(Home);
