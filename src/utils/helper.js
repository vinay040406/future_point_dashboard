import {
  ACADEMIC_PERFORMANCE,
  DASHBOARD,
  FEE_STATUS,
  LOG_OUT,
  SETTINGS,
} from "./constant";

export const SIDEBAR_DATA = [
  { icon: "dashboard", text: "Dashboard", href: DASHBOARD },
  {
    icon: "academic",
    text: "Academic Performance",
    href: ACADEMIC_PERFORMANCE,
  },
  { icon: "fee", text: "Fee status", href: FEE_STATUS },
  { icon: "settings", text: "Settings", href: SETTINGS },
  { icon: "logOut", text: "Log Out", href: LOG_OUT },
];

export const STUDENT_DATA_LIST = [
  {
    image: "/images/webp/student1.webp",
    name: "Rohan Duhan",
    class: "2nd",
    phone_no: "+91 8986527831",
  },
  {
    image: "/images/webp/student2.webp",
    name: "Mohan Duhan",
    class: "3rd",
    phone_no: "+91 8986527831",
  },
  {
    image: "/images/webp/student3.webp",
    name: "Sohan Duhan",
    class: "6th",
    phone_no: "+91 8986527831",
  },
];

export const NOTIFICATION_DATA_LIST = [
  {
    title: "Today is School Holiday",
    holidayName: "Ram Navami",
    createdAt: "2026-04-08T10:15:22.053Z",
  },
  {
    title: "Meeting Scheduled",
    holidayName: "Mahavir Jayanti",
    createdAt: "2026-04-06T14:21:10.120Z",
  },
  {
    title: "Assignment Submission Reminder",
    holidayName: "Holi",
    createdAt: "2026-03-28T08:05:44.910Z",
  },
  {
    title: "Exam Result Declared",
    holidayName: "Diwali",
    createdAt: "2026-03-15T11:32:18.500Z",
  },
  {
    title: "Sports Day Announcement",
    holidayName: "Independence Day",
    createdAt: "2026-02-20T09:10:00.000Z",
  },
  {
    title: "New Course Available",
    holidayName: "Christmas",
    createdAt: "2025-12-25T16:45:30.250Z",
  },
];
