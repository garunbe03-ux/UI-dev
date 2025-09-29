// Google Analytics event tracking functions
export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID

// Track page views
export const pageview = (url: string) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("config", GA_TRACKING_ID, {
      page_path: url,
    })
  }
}

// Track custom events
export const event = ({
  action,
  category,
  label,
  value,
}: {
  action: string
  category: string
  label?: string
  value?: number
}) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", action, {
      event_category: category,
      event_label: label,
      value: value,
    })
  }
}

// Track specific business events
export const trackNavigation = (page: string) => {
  event({
    action: "navigate",
    category: "Navigation",
    label: page,
  })
}

export const trackCourseInterest = (courseType: string) => {
  event({
    action: "course_interest",
    category: "Engagement",
    label: courseType,
  })
}

export const trackSocialClick = (platform: string) => {
  event({
    action: "social_click",
    category: "Social Media",
    label: platform,
  })
}
