const TAB_HREFS: Record<string, "about" | "work"> = {
  "/#about": "about",
  "/#work": "work",
};

// Called from navbar/footer link clicks. When already on the homepage, switch
// the portfolio tab + scroll directly (instead of letting Next.js do a hash
// navigation, which is async and doesn't fire "hashchange"). Returns true when
// handled, so the caller can preventDefault. On other pages it returns false
// and the link navigates home normally (Portfolio reads the hash on mount).
export function navigateToTab(href: string): boolean {
  const tab = TAB_HREFS[href];
  if (!tab) return false;
  if (typeof window === "undefined") return false;
  if (window.location.pathname !== "/") return false;
  window.history.pushState(null, "", href);
  window.dispatchEvent(new CustomEvent("portfoliotab", { detail: tab }));
  return true;
}
