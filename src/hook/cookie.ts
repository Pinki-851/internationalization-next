"use server"; 

import { cookies } from "next/headers";

/**
 * Retrieves the user's locale from cookies.
 * If the cookie is not found, it returns a default locale.
 */
export async function getUserLocale() {
    return (await cookies())?.get("lang")?.value || "en";
  }
  
  /**
   * Updates the cookie with the provided `locale` value.
   * @param {Locale} locale - The locale value to be set in the cookie.
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  export async function setUserLocale(locale: any) {
    (await cookies()).set("lang", locale);
  }
  