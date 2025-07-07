import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import useColors from "../../assets/styles/colors";
import GeneralHeader from "../../components/GeneralHeader";
import SubjectSelector from "../../components/SubjectSelector";
import TutorSelector from "../../components/TutorSelector";
import TutorDetails from "../../components/TutorDetails";

const DATA = {
  Math: {
    tutors: [
      {
        name: "Mr. Smith",
        schedule: [
          {
            time: "Mon 10:00",
            title: "Algebra Basics",
            link: "https://teams.microsoft.com/abc",
          },
          { time: "Wed 14:00", title: "Geometry", link: null },
        ],
        lessons: [
          {
            title: "Algebra Basics",
            type: "pdf",
            url: "https://example.com/algebra.pdf",
          },
          {
            title: "Geometry",
            type: "ppt",
            url: "https://example.com/geometry.ppt",
          },
        ],
        homeworks: [
          {
            title: "Algebra HW 1",
            homeworkUrl: "https://example.com/algebra-hw1.pdf",
            correctionUrl: "https://example.com/algebra-hw1-correction.pdf",
          },
          {
            title: "Geometry HW 1",
            homeworkUrl: "https://example.com/geometry-hw1.pdf",
            correctionUrl: null,
          },
        ],
      },
      {
        name: "Ms. Johnson",
        schedule: [
          {
            time: "Fri 09:00",
            title: "Calculus Intro",
            link: "https://teams.microsoft.com/xyz",
          },
        ],
        lessons: [
          {
            title: "Calculus Intro",
            type: "pdf",
            url: "https://example.com/calculus.pdf",
          },
        ],
        homeworks: [
          {
            title: "Calculus HW 1",
            homeworkUrl: "https://example.com/calculus-hw1.pdf",
            correctionUrl: null,
          },
        ],
      },
    ],
  },

  Science: {
    tutors: [
      {
        name: "Dr. Green",
        schedule: [
          {
            time: "Mon 13:00",
            title: "Biology",
            link: null,
          },
        ],
        lessons: [
          {
            title: "Biology",
            type: "pdf",
            url: "https://example.com/biology.pdf",
          },
        ],
        homeworks: [
          {
            title: "Biology HW",
            homeworkUrl: "https://example.com/biology-hw.pdf",
            correctionUrl: null,
          },
        ],
      },
    ],
  },
  Physics: {
    tutors: [
      {
        name: "Mr. Newton",
        schedule: [
          {
            time: "Wed 10:00",
            title: "Mechanics",
            link: "https://teams.microsoft.com/ghi",
          },
        ],
        lessons: [
          {
            title: "Mechanics",
            type: "ppt",
            url: "https://example.com/mechanics.ppt",
          },
        ],
        homeworks: [
          {
            title: "Mechanics HW",
            homeworkUrl: "https://example.com/mechanics-hw.pdf",
            correctionUrl: null,
          },
        ],
      },
    ],
  },
  English: {
    tutors: [
      {
        name: "Mrs. Brown",
        schedule: [
          {
            time: "Wedns 09:00",
            title: "Grammar Basics",
            link: "https://teams.microsoft.com/...",
          },
          {
            time: "Thu 15:00",
            title: "Essay Writing",
            link: "https://teams.microsoft.com/def",
          },
        ],
        lessons: [
          {
            title: "Grammar",
            type: "pdf",
            url: "https://example.com/grammar.pdf",
          },
          {
            title: "Essay Writing",
            type: "pdf",
            url: "https://example.com/essay.pdf",
          },
        ],
        homeworks: [
          {
            title: "Grammar HW",
            homeworkUrl: "https://example.com/grammar-hw.pdf",
            correctionUrl: null,
          },
          {
            title: "Essay HW",
            homeworkUrl: "https://example.com/essay-hw.pdf",
            correctionUrl: "https://example.com/essay-hw-correction.pdf",
          },
        ],
      },
    ],
  },
};
const PrivateLessonsScreen = () => {
  const Colors = useColors();
  const [selectedSubject, setSelectedSubject] = useState(null);
  const [selectedTutor, setSelectedTutor] = useState(null);
  const subjects = Object.keys(DATA);

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: Colors.background,
    },
    content: {
      padding: 20,
    },
  });

  return (
    <View style={styles.container}>
      <GeneralHeader
        showBackArrow={true}
        title="Private Lessons"
        subtitle="Private Lessons"
      />
      {!selectedSubject ? (
        <SubjectSelector
          subjects={subjects}
          onSelect={setSelectedSubject}
          Colors={Colors}
        />
      ) : !selectedTutor ? (
        <TutorSelector
          tutors={DATA[selectedSubject].tutors}
          onSelect={setSelectedTutor}
          onBack={() => setSelectedSubject(null)}
          Colors={Colors}
        />
      ) : (
        <TutorDetails
          tutor={selectedTutor}
          onBack={() => setSelectedTutor(null)}
        />
      )}
    </View>
  );
};

export default PrivateLessonsScreen;
