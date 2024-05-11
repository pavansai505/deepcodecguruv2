export interface Lecture {
    id: number;
    createdDate: string;
    lastModifiedDate: string | null;
    createdBy: number;
    lastModifiedBy: number | null;
    unitId: number;
    unitTitle: string;
    lessonId: number;
    lessonTitle: string;
    lessonActivityName: string;
    lessonNotes: string;
    lessonVideo: string;
    lessonObjectives: string;
    enable: boolean;
  }
  
export interface Course {
    id: number;
    createdDate: string;
    lastModifiedDate: string | null;
    createdBy: number;
    lastModifiedBy: number | null;
    title: string;
    authorName: string;
    description: string;
    synopsis: string;
    courseCover: string | null;
    histories: any[]; // Assuming this is an array of any type
    lectures: Lecture[];
    courseProgresses: any[]; // Assuming this is an array of any type
  }
  