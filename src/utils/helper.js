import {
  ACADEMIC_PERFORMANCE,
  DASHBOARD,
  FEE_STATUS,
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
  { icon: "logOut", text: "Log Out", href: "" },
];

export const STUDENT_DATA_LIST = [
  {
    image: "/images/webp/student1.webp",
    name: "Rohan Duhan",
    class: "2nd",
    phone_no: "+91 8986527831",

    father_name: "Rajpal Singh",
    mother_name: "Sujata Kumari",
    dob: "06/07/2009",
    email: "rohanduhan@gmail.com",
    address: "6th KM Stone, O P Jindal, Hisar - 125005",

    subjects: [
      "Math",
      "Computer",
      "English",
      "Science",
      "Hindi",
      "S.S.T",
      "Art",
    ],

    stats: {
      totalMarks: "485/500",
      attendance: "220/320",
      grade: "A+",
      percentage: "91%",
    },

    examData: [
      { subject: "Maths", total: 100, marks: 92, status: "Pass", grade: "A+" },
      { subject: "Hindi", total: 100, marks: 87, status: "Pass", grade: "B+" },
      {
        subject: "Hindi Grammar",
        total: 60,
        marks: 55,
        status: "Pass",
        grade: "A",
      },
      {
        subject: "English",
        total: 100,
        marks: 90,
        status: "Pass",
        grade: "A+",
      },
      {
        subject: "English Grammar",
        total: 60,
        marks: 52,
        status: "Pass",
        grade: "A+",
      },
      {
        subject: "Computer",
        total: 80,
        marks: 70,
        status: "Pass",
        grade: "B+",
      },
    ],

    attendanceData: {
      total: 265,
      present: 180,
      absent: 20,
      leave: 65,
    },

    teacherFeedback: {
      description:
        "Teachers have consistently praised your child for their exceptional effort and active participation in class. Their enthusiasm and dedication are evident in their approach to learning and their contributions to classroom discussions. Teachers have noted several key aspects of your child’s performance:",
      points: [
        {
          title: "Engaged Learning",
          text: "Your child actively engages with the material, asking insightful questions and seeking to deepen their understanding of complex concepts.",
        },
        {
          title: "Collaborative Spirit",
          text: "They work effectively with peers, demonstrating leadership and teamwork skills during group projects and collaborative assignments.",
        },
      ],
    },
  },

  {
    image: "/images/webp/student2.webp",
    name: "Mohan Duhan",
    class: "3rd",
    phone_no: "+91 8986527831",

    father_name: "Ramesh Kumar",
    mother_name: "Sunita Devi",
    dob: "12/09/2008",
    email: "mohanduhan@gmail.com",
    address: "Sector 14, Hisar - 125001",

    subjects: ["Math", "English", "Science", "Computer", "Hindi"],

    stats: {
      totalMarks: "420/500",
      attendance: "200/300",
      grade: "A",
      percentage: "84%",
    },

    examData: [
      { subject: "Maths", total: 100, marks: 85, status: "Pass", grade: "A" },
      { subject: "English", total: 100, marks: 80, status: "Pass", grade: "A" },
      {
        subject: "Science",
        total: 100,
        marks: 78,
        status: "Pass",
        grade: "B+",
      },
      { subject: "Hindi", total: 100, marks: 82, status: "Pass", grade: "A" },
      {
        subject: "Computer",
        total: 100,
        marks: 75,
        status: "Pass",
        grade: "B+",
      },
    ],

    attendanceData: {
      total: 250,
      present: 190,
      absent: 25,
      leave: 35,
    },

    teacherFeedback: {
      description:
        "A consistent performer with good discipline and interest in studies.",
      points: [
        {
          title: "Consistent Effort",
          text: "Maintains steady performance across subjects.",
        },
        {
          title: "Good Behavior",
          text: "Respectful and disciplined in class.",
        },
      ],
    },
  },

  {
    image: "/images/webp/student3.webp",
    name: "Sohan Duhan",
    class: "6th",
    phone_no: "+91 8986527831",

    father_name: "Mahesh Kumar",
    mother_name: "Kavita Devi",
    dob: "03/03/2006",
    email: "sohanduhan@gmail.com",
    address: "Model Town, Hisar - 125005",

    subjects: ["Math", "Physics", "Chemistry", "Biology", "English"],

    stats: {
      totalMarks: "460/500",
      attendance: "240/300",
      grade: "A+",
      percentage: "92%",
    },

    examData: [
      { subject: "Maths", total: 100, marks: 95, status: "Pass", grade: "A+" },
      {
        subject: "Physics",
        total: 100,
        marks: 90,
        status: "Pass",
        grade: "A+",
      },
      {
        subject: "Chemistry",
        total: 100,
        marks: 88,
        status: "Pass",
        grade: "A",
      },
      {
        subject: "Biology",
        total: 100,
        marks: 92,
        status: "Pass",
        grade: "A+",
      },
      { subject: "English", total: 100, marks: 85, status: "Pass", grade: "A" },
    ],

    attendanceData: {
      total: 280,
      present: 230,
      absent: 15,
      leave: 35,
    },

    teacherFeedback: {
      description:
        "Excellent academic performance with strong analytical skills.",
      points: [
        {
          title: "High Achievement",
          text: "Performs exceptionally well in academics.",
        },
        {
          title: "Critical Thinking",
          text: "Shows strong problem-solving and analytical ability.",
        },
      ],
    },
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
