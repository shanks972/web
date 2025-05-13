import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  StatusBar,
  TouchableOpacity,
  Modal,
  Dimensions,
  Platform
} from 'react-native';

const { width } = Dimensions.get('window');

const HomeScreen = () => {
  const [activeTab, setActiveTab] = useState('Home');
  const [selectedClass, setSelectedClass] = useState(null);
  const [selectedScheduleClass, setSelectedScheduleClass] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [scheduleModalVisible, setScheduleModalVisible] = useState(false);

  const userInfo = {
    name: "Сайн уу Лхагвадорж",
    role: "Оюутан",
    group: "306.1 - Програм хангамж",
    semester: "2024-2025 оны хаврын улирал",
    university: "Шинэ монгол технологийн Сургууль",
  };

  const classSchedule = [
    { 
      day: "Даваа", 
      classes: [
        { 
          time: "08:30 - 09:50", 
          subject: "Програмчлал 2", 
          code: "CS304", 
          room: "301",
          type: "Лекц",
          details: {
            attendance: { present: 14, absent: 1, total: 15, percentage: "93%" },
            seminarTasks: [
              { title: "Гараар өгөгдөл оруулах", due: "2023-03-15", status: "done" },
              { title: "SQL query бичих", due: "2023-03-22", status: "pending" }
            ]
          }
        },
        { 
          time: "10:00 - 11:30", 
          subject: "Өгөгдлийн сан", 
          code: "CS306", 
          room: "205",
          type: "Семинар",
          details: {
            attendance: { present: 8, absent: 7, total: 15, percentage: "53%" },
            seminarTasks: [
              { title: "ER диаграм зурж ирэх", due: "2023-03-16", status: "done" },
              { title: "Хүснэгт үүсгэх", due: "2023-03-23", status: "pending" }
            ]
          }
        },
        { 
          time: "13:00 - 14:30", 
          subject: "Математик", 
          code: "MATH201", 
          room: "105",
          type: "Лекц",
          details: {
            attendance: { present: 12, absent: 3, total: 15, percentage: "80%" },
            seminarTasks: []
          }
        }
      ]
    },
    { 
      day: "Мягмар", 
      classes: [
        { 
          time: "09:00 - 10:30", 
          subject: "Вэб хөгжүүлэлт", 
          code: "CS308", 
          room: "401",
          type: "Лекц",
          details: {
            attendance: { present: 15, absent: 0, total: 15, percentage: "100%" },
            seminarTasks: [
              { title: "HTML form бүтээх", due: "2023-03-17", status: "done" },
              { title: "CSS стиль хийх", due: "2023-03-24", status: "pending" }
            ]
          }
        },
        { 
          time: "13:00 - 14:30", 
          subject: "Компьютерийн сүлжээ", 
          code: "CS310", 
          room: "302",
          type: "Семинар",
          details: {
            attendance: { present: 6, absent: 9, total: 15, percentage: "40%" },
            seminarTasks: [
              { title: "IP хаяг тооцоолох", due: "2023-03-18", status: "done" },
              { title: "Сүлжээний топологи зурах", due: "2023-03-25", status: "pending" }
            ]
          }
        }
        
      ]
    },
    { 
      day: "Лхагва", 
      classes: [
        { 
          time: "08:30 - 09:50", 
          subject: "Програмчлал 2", 
          code: "CS304", 
          room: "301",
          type: "Лекц",
          details: {
            attendance: { present: 13, absent: 2, total: 15, percentage: "87%" },
            seminarTasks: []
          }
        },
        { 
          time: "10:00 - 11:30", 
          subject: "Өгөгдлийн сан", 
          code: "CS306", 
          room: "205",
          type: "Семинар",
          details: {
            attendance: { present: 9, absent: 6, total: 15, percentage: "60%" },
            seminarTasks: [
              { title: "Хүснэгтэй ажиллах", due: "2023-03-19", status: "done" },
              { title: "SQL query бичих", due: "2023-03-26", status: "pending" }
            ]
          }
        }
      ]
    },
    { 
      day: "Пүрэв", 
      classes: [
        { 
          time: "08:30 - 09:50", 
          subject: "Програмчлал 2", 
          code: "CS304", 
          room: "301",
          type: "Лекц",
          details: {
            attendance: { present: 11, absent: 4, total: 15, percentage: "73%" },
            seminarTasks: []
          }
        },
        { 
          time: "10:00 - 11:30", 
          subject: "Вэб хөгжүүлэлт", 
          code: "CS308", 
          room: "401",
          type: "Семинар",
          details: {
            attendance: { present: 14, absent: 1, total: 15, percentage: "93%" },
            seminarTasks: [
              { title: "JavaScript судлах", due: "2023-03-20", status: "done" },
              { title: "React сургалт", due: "2023-03-27", status: "pending" }
            ]
          }
        },
        { 
          time: "13:00 - 14:30", 
          subject: "Компьютерийн сүлжээ", 
          code: "CS310", 
          room: "302",
          type: "Лекц",
          details: {
            attendance: { present: 7, absent: 8, total: 15, percentage: "47%" },
            seminarTasks: []
          }
        }
      ]
    },
    { 
      day: "Баасан", 
      classes: [
        { 
          time: "08:30 - 09:50", 
          subject: "Математик", 
          code: "MATH201", 
          room: "105",
          type: "Лекц",
          details: {
            attendance: { present: 10, absent: 5, total: 15, percentage: "67%" },
            seminarTasks: []
          }
        }
      ]
    }
  ];

  const todayClasses = [
    {
      time: "08:30 - 09:50",
      subject: "Програмчлал 2",
      code: "CS304",
      type: "Лекц",
      status: "attended",
      room: "301",
      details: {
        lectureAttendance: { present: 14, absent: 1, total: 15, percentage: "93%" },
        seminarAttendance: { present: 12, absent: 3, total: 15, percentage: "80%" },
        scores: { seminar: 18, assignment: 25, total: 43 },
        seminarTasks: [
          { title: "Объект хандалтын програмчлал", due: "2023-03-20", status: "done" },
          { title: "Интерфэйс бүтээх", due: "2023-03-27", status: "pending" }
        ]
      }
    },
    {
      time: "10:00 - 11:30",
      subject: "Хиймэл оюун ухаан",
      code: "CS306",
      type: "Семинар",
      status: "missed",
      room: "205",
      details: {
        lectureAttendance: { present: 8, absent: 7, total: 15, percentage: "53%" },
        seminarAttendance: { present: 9, absent: 6, total: 15, percentage: "60%" },
        scores: { seminar: 15, assignment: 20, total: 35 },
        seminarTasks: [
          { title: "Хүснэгт үүсгэх", due: "2023-03-21", status: "done" },
          { title: "SQL query бичих", due: "2023-03-28", status: "pending" }
        ]
      }
    },
    {
      time: "14:00 - 15:30",
      subject: "Вэб хөгжүүлэлт",
      code: "CS308",
      type: "Лекц",
      status: "pending",
      room: "401",
      details: {
        lectureAttendance: { present: 15, absent: 0, total: 15, percentage: "100%" },
        seminarAttendance: { present: 14, absent: 1, total: 15, percentage: "93%" },
        scores: { seminar: 20, assignment: 28, total: 48 },
        seminarTasks: [
          { title: "HTML form бүтээх", due: "2023-03-22", status: "done" },
          { title: "JavaScript validation", due: "2023-03-29", status: "pending" }
        ]
      }
    },
        {
      time: "14:00 - 15:30",
      subject: "Вэб хөгжүүлэлт",
      code: "CS308",
      type: "Лекц",
      status: "pending",
      room: "401",
      details: {
        lectureAttendance: { present: 15, absent: 0, total: 15, percentage: "100%" },
        seminarAttendance: { present: 14, absent: 1, total: 15, percentage: "93%" },
        scores: { seminar: 20, assignment: 28, total: 48 },
        seminarTasks: [
          { title: "HTML form бүтээх", due: "2023-03-22", status: "done" },
          { title: "JavaScript validation", due: "2023-03-29", status: "pending" }
        ]
      }
    },
  ];

  const notifications = [
    {
      type: "warning",
      message: 'Та "Өгөгдлийн сан" хичээлийг 3 удаа тасалсан байна. 5 хүрвэл шалгалт өгөх боломжгүй!',
    },
    {
      type: "announcement",
      message: '3-р сарын 28-нд дүнгийн сүүлийн бүртгэл хийгдэх тул хугацаандаа шалгана уу.',
    },
    {
      type: "teacher",
      message: 'Маргаашийн "Програмчлал 2" хичээл онлайн Zoom-оор орно!',
    },
  ];

  const openClassDetails = (classItem) => {
    setSelectedClass(classItem);
    setModalVisible(true);
  };

  const openScheduleClassDetails = (classItem) => {
    setSelectedScheduleClass(classItem);
    setScheduleModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setSelectedClass(null);
  };

  const closeScheduleModal = () => {
    setScheduleModalVisible(false);
    setSelectedScheduleClass(null);
  };

  const getStatusColor = (status) => {
    switch(status) {
      case 'attended': return '#4CAF50';
      case 'missed': return '#F44336';
      case 'pending': return '#FF9800';
      default: return '#9E9E9E';
    }
  };

  const getTaskStatusColor = (status) => {
    switch(status) {
      case 'done': return '#4CAF50';
      case 'pending': return '#FF9800';
      case 'late': return '#F44336';
      default: return '#9E9E9E';
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Нүүр хуудас</Text>
      </View>

      <ScrollView 
        style={styles.content}
        contentContainerStyle={styles.contentContainer}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.userInfoSection}>
          <Text style={styles.userName}>{userInfo.name}</Text>
          <View style={styles.userBadge}>
            <Text style={styles.userBadgeText}>{userInfo.role}</Text>
          </View>
          <Text style={styles.userDetails}>{userInfo.group}</Text>
          <Text style={styles.userDetails}>{userInfo.university}</Text>
          <View style={styles.semesterContainer}>
            <Text style={styles.semesterInfo}>{userInfo.semester}</Text>
          </View>
        </View>

        {/* Tabs Section */}
        <View style={styles.tabsContainer}>
          <TouchableOpacity
            style={[styles.tab, activeTab === 'Home' && styles.activeTab]}
            onPress={() => setActiveTab('Home')}
          >
            <Text style={[styles.tabText, activeTab === 'Home' && styles.activeTabText]}>Нүүр</Text>
            {activeTab === 'Home' && <View style={styles.activeTabIndicator} />}
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.tab, activeTab === 'Хичээл' && styles.activeTab]}
            onPress={() => setActiveTab('Хичээл')}
          >
            <Text style={[styles.tabText, activeTab === 'Хичээл' && styles.activeTabText]}>Хичээл</Text>
            {activeTab === 'Хичээл' && <View style={styles.activeTabIndicator} />}
          </TouchableOpacity>
        </View>

        {/* Content Based on Active Tab */}
        {activeTab === 'Home' && (
          <>
            <View style={styles.sectionContainer}>
              <View style={styles.sectionHeader}>
                <Text style={styles.sectionTitle}>7 хоногийн хичээлийн хуваарь</Text>
              </View>
              <ScrollView 
                horizontal 
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.scheduleScrollContainer}
              >
                {classSchedule.map((daySchedule, dayIndex) => (
                  <View key={dayIndex} style={styles.scheduleCard}>
                    <Text style={styles.scheduleDay}>{daySchedule.day}</Text>
                    {daySchedule.classes.map((classItem, classIndex) => (
                      <TouchableOpacity
                        key={classIndex}
                        style={styles.scheduleItem}
                        onPress={() => openScheduleClassDetails(classItem)}
                        activeOpacity={0.7}
                      >
                        <Text style={styles.scheduleTime}>{classItem.time}</Text>
                        <View style={styles.scheduleDetails}>
                          <Text style={styles.scheduleSubject}>{classItem.subject}</Text>
                          <View style={styles.scheduleMeta}>
                            <Text style={styles.scheduleCode}>{classItem.code}</Text>
                            <Text style={styles.scheduleRoom}>{classItem.room} тоот</Text>
                          </View>
                          <Text style={styles.scheduleType}>{classItem.type}</Text>
                        </View>
                      </TouchableOpacity>
                    ))}
                  </View>
                ))}
              </ScrollView>
            </View>

            <View style={styles.sectionContainer}>
              <View style={styles.sectionHeader}>
                <Text style={styles.sectionTitle}>Мэдэгдэл</Text>
                <TouchableOpacity>
                  <Text style={styles.seeAllText}>Бүгдийг харах</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.notificationsContainer}>
                {notifications.map((notification, index) => (
                  <View 
                    key={index} 
                    style={[
                      styles.notificationCard,
                      notification.type === 'warning' && styles.warningCard,
                      notification.type === 'announcement' && styles.announcementCard,
                      notification.type === 'teacher' && styles.teacherCard,
                    ]}
                  >
                    <View style={styles.notificationIconContainer}>
                      <Text style={[
                        styles.notificationIcon,
                        notification.type === 'warning' && styles.warningIcon,
                        notification.type === 'announcement' && styles.announcementIcon,
                        notification.type === 'teacher' && styles.teacherIcon,
                      ]}>
                        {notification.type === 'warning' ? '⚠️' :
                        notification.type === 'announcement' ? '📢' : '👨‍🏫'}
                      </Text>
                    </View>
                    <Text style={styles.notificationText}>{notification.message}</Text>
                  </View>
                ))}
              </View>
            </View>
          </>
        )}

        {activeTab === 'Хичээл' && (
          <View style={styles.sectionContainer}>
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionTitle}>Судалж буй хичээлүүд</Text>
            </View>
            <View style={styles.classesContainer}>
              {classSchedule.flatMap(day => day.classes)
                .filter((course, index, self) => 
                  index === self.findIndex(c => c.code === course.code)
                )
                .map((course, index) => (
                  <TouchableOpacity 
                    key={index} 
                    style={styles.courseCard}
                    onPress={() => openClassDetails(course)}
                    activeOpacity={0.8}
                  >
                    <View style={styles.courseHeader}>
                      <View style={styles.courseTitleContainer}>
                        <Text style={styles.courseName}>{course.subject}</Text>
                        <Text style={styles.courseCode}>{course.code}</Text>
                      </View>
                    </View>

                    <View style={styles.courseProgress}>
                      <View style={styles.progressSection}>
                        <Text style={styles.progressLabel}>Ирц</Text>
                        <View style={styles.progressBarBackground}>
                          <View 
                            style={[
                              styles.progressBarFill,
                              { 
                                width: `${course.details.attendance.present / course.details.attendance.total * 100}%`,
                                backgroundColor: '#2196F3'
                              }
                            ]}
                          />
                        </View>
                        <Text style={styles.progressText}>
                          {course.details.attendance.present}/{course.details.attendance.total} ({course.details.attendance.percentage})
                        </Text>
                      </View>

                      {course.details.seminarTasks.length > 0 && (
                        <View style={styles.tasksSection}>
                          <Text style={styles.tasksLabel}>Дараагийн даалгавар:</Text>
                          {course.details.seminarTasks
                            .filter(task => task.status === 'pending')
                            .slice(0, 1)
                            .map((task, taskIndex) => (
                              <View key={taskIndex} style={styles.taskItem}>
                                <Text style={styles.taskTitle}>{task.title}</Text>
                                <Text style={styles.taskDue}>Дуусах: {task.due}</Text>
                              </View>
                            ))}
                        </View>
                      )}
                    </View>

                    <View style={styles.courseFooter}>
                      <View style={styles.courseInfo}>
                        <Text style={styles.courseRoom}>{course.room} тоот</Text>
                        <Text style={styles.courseSchedule}>
                          {classSchedule.find(day => 
                            day.classes.some(c => c.code === course.code)
                          )?.day}
                        </Text>
                      </View>
                      <View style={styles.detailsButton}>
                        <Text style={styles.detailsButtonText}>Дэлгэрэнгүй</Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                ))}
            </View>
          </View>
        )}
      </ScrollView>

      {/* Today's Class Details Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={closeModal}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            {selectedClass && (
              <>
                <View style={styles.modalHeader}>
                  <View style={styles.modalHeaderContent}>
                    <Text style={styles.modalTitle}>{selectedClass.subject}</Text>
                    <Text style={styles.modalSubtitle}>{selectedClass.code}</Text>
                  </View>
                  <TouchableOpacity onPress={closeModal} style={styles.closeButton}>
                    <Text style={styles.closeButtonText}>✕</Text>
                  </TouchableOpacity>
                </View>
                
                <ScrollView style={styles.modalBody}>
                  {/* Ирц хэсэг */}
                  <View style={styles.detailSection}>
                    <View style={styles.sectionHeader}>
                      <Text style={styles.detailSectionTitle}>Ирц</Text>
                      <View style={styles.sectionBadge}>
                        <Text style={styles.sectionBadgeText}>80%</Text>
                      </View>
                    </View>
                    
                    <View style={styles.attendanceContainer}>
                      <View style={styles.attendanceCard}>
                        <View style={styles.attendanceHeader}>
                          <Text style={styles.attendanceLabel}>Лекц</Text>
                          <Text style={styles.attendanceValue}>12/15</Text>
                        </View>
                        <View style={styles.progressContainer}>
                          <View style={styles.progressBarBackground}>
                            <View 
                              style={[
                                styles.progressBarFill,
                                { 
                                  width: `${selectedClass.details.attendance.present / selectedClass.details.attendance.total * 100}%`,
                                  backgroundColor: '#2196F3'
                                }
                              ]}
                            />
                          </View>
                        </View>
                      </View>

                      <View style={styles.attendanceCard}>
                        <View style={styles.attendanceHeader}>
                          <Text style={styles.attendanceLabel}>Семинар</Text>
                          <Text style={styles.attendanceValue}>10/12</Text>
                        </View>
                        <View style={styles.progressContainer}>
                          <View style={styles.progressBarBackground}>
                            <View 
                              style={[
                                styles.progressBarFill,
                                { 
                                  width: `${selectedClass.details.attendance.present / selectedClass.details.attendance.total * 100}%`,
                                  backgroundColor: '#4CAF50'
                                }
                              ]}
                            />
                          </View>
                        </View>
                      </View>
                    </View>

                    <View style={styles.statsContainer}>
                      <View style={styles.statCard}>
                        <Text style={styles.statValue}>22</Text>
                        <Text style={styles.statLabel}>Ирсэн</Text>
                      </View>
                      <View style={styles.statCard}>
                        <Text style={styles.statValue}>5</Text>
                        <Text style={styles.statLabel}>Тасалсан</Text>
                      </View>
                      <View style={styles.statCard}>
                        <Text style={styles.statValue}>27</Text>
                        <Text style={styles.statLabel}>Нийт</Text>
                      </View>
                    </View>
                  </View>

                  {/* Дүн хэсэг */}
                  <View style={styles.detailSection}>
                    <View style={styles.sectionHeader}>
                      <Text style={styles.detailSectionTitle}>Дүн</Text>
                      <View style={styles.sectionBadge}>
                        <Text style={styles.sectionBadgeText}>80%</Text>
                      </View>
                    </View>
                    
                    <View style={styles.scoreContainer}>
                      {selectedClass.code === 'CS304' && (
                        <>
                          <View style={styles.scoreCard}>
                            <View style={styles.scoreHeader}>
                              <Text style={styles.scoreLabel}>Явц 1</Text>
                              <Text style={styles.scoreValue}>18/20</Text>
                            </View>
                            <View style={styles.scoreBarContainer}>
                              <View style={styles.scoreBarBackground}>
                                <View 
                                  style={[
                                    styles.scoreBarFill,
                                    { 
                                      width: `${(18/20) * 100}%`,
                                      backgroundColor: '#2196F3'
                                    }
                                  ]}
                                />
                              </View>
                            </View>
                          </View>

                          <View style={styles.scoreCard}>
                            <View style={styles.scoreHeader}>
                              <Text style={styles.scoreLabel}>Явц 2</Text>
                              <Text style={styles.scoreValue}>17/20</Text>
                            </View>
                            <View style={styles.scoreBarContainer}>
                              <View style={styles.scoreBarBackground}>
                                <View 
                                  style={[
                                    styles.scoreBarFill,
                                    { 
                                      width: `${(17/20) * 100}%`,
                                      backgroundColor: '#4CAF50'
                                    }
                                  ]}
                                />
                              </View>
                            </View>
                          </View>

                          <View style={styles.scoreCard}>
                            <View style={styles.scoreHeader}>
                              <Text style={styles.scoreLabel}>Бие даалт</Text>
                              <Text style={styles.scoreValue}>25/30</Text>
                            </View>
                            <View style={styles.scoreBarContainer}>
                              <View style={styles.scoreBarBackground}>
                                <View 
                                  style={[
                                    styles.scoreBarFill,
                                    { 
                                      width: `${(25/30) * 100}%`,
                                      backgroundColor: '#9C27B0'
                                    }
                                  ]}
                                />
                              </View>
                            </View>
                          </View>

                          <View style={styles.scoreCard}>
                            <View style={styles.scoreHeader}>
                              <Text style={styles.scoreLabel}>Бие даалт 2</Text>
                              <View style={styles.pendingBadge}>
                                <Text style={styles.pendingBadgeText}>Хийгдээгүй</Text>
                              </View>
                            </View>
                            <View style={styles.scoreBarContainer}>
                              <View style={styles.scoreBarBackground}>
                                <View 
                                  style={[
                                    styles.scoreBarFill,
                                    { 
                                      width: '0%',
                                      backgroundColor: '#9E9E9E'
                                    }
                                  ]}
                                />
                              </View>
                            </View>
                          </View>
                        </>
                      )}

                      {selectedClass.code === 'CS306' && (
                        <>
                          <View style={styles.scoreCard}>
                            <View style={styles.scoreHeader}>
                              <Text style={styles.scoreLabel}>Явц 1</Text>
                              <Text style={styles.scoreValue}>15/20</Text>
                            </View>
                            <View style={styles.scoreBarContainer}>
                              <View style={styles.scoreBarBackground}>
                                <View 
                                  style={[
                                    styles.scoreBarFill,
                                    { 
                                      width: `${(15/20) * 100}%`,
                                      backgroundColor: '#2196F3'
                                    }
                                  ]}
                                />
                              </View>
                            </View>
                          </View>

                          <View style={styles.scoreCard}>
                            <View style={styles.scoreHeader}>
                              <Text style={styles.scoreLabel}>Явц 2</Text>
                              <Text style={styles.scoreValue}>14/20</Text>
                            </View>
                            <View style={styles.scoreBarContainer}>
                              <View style={styles.scoreBarBackground}>
                                <View 
                                  style={[
                                    styles.scoreBarFill,
                                    { 
                                      width: `${(14/20) * 100}%`,
                                      backgroundColor: '#4CAF50'
                                    }
                                  ]}
                                />
                              </View>
                            </View>
                          </View>

                          <View style={styles.scoreCard}>
                            <View style={styles.scoreHeader}>
                              <Text style={styles.scoreLabel}>Бие даалт</Text>
                              <Text style={styles.scoreValue}>20/30</Text>
                            </View>
                            <View style={styles.scoreBarContainer}>
                              <View style={styles.scoreBarBackground}>
                                <View 
                                  style={[
                                    styles.scoreBarFill,
                                    { 
                                      width: `${(20/30) * 100}%`,
                                      backgroundColor: '#9C27B0'
                                    }
                                  ]}
                                />
                              </View>
                            </View>
                          </View>

                          <View style={styles.scoreCard}>
                            <View style={styles.scoreHeader}>
                              <Text style={styles.scoreLabel}>Бие даалт 2</Text>
                              <View style={styles.pendingBadge}>
                                <Text style={styles.pendingBadgeText}>Хийгдээгүй</Text>
                              </View>
                            </View>
                            <View style={styles.scoreBarContainer}>
                              <View style={styles.scoreBarBackground}>
                                <View 
                                  style={[
                                    styles.scoreBarFill,
                                    { 
                                      width: '0%',
                                      backgroundColor: '#9E9E9E'
                                    }
                                  ]}
                                />
                              </View>
                            </View>
                          </View>
                        </>
                      )}

                      {selectedClass.code === 'CS308' && (
                        <>
                          <View style={styles.scoreCard}>
                            <View style={styles.scoreHeader}>
                              <Text style={styles.scoreLabel}>Явц 1</Text>
                              <Text style={styles.scoreValue}>19/20</Text>
                            </View>
                            <View style={styles.scoreBarContainer}>
                              <View style={styles.scoreBarBackground}>
                                <View 
                                  style={[
                                    styles.scoreBarFill,
                                    { 
                                      width: `${(19/20) * 100}%`,
                                      backgroundColor: '#2196F3'
                                    }
                                  ]}
                                />
                              </View>
                            </View>
                          </View>

                          <View style={styles.scoreCard}>
                            <View style={styles.scoreHeader}>
                              <Text style={styles.scoreLabel}>Явц 2</Text>
                              <Text style={styles.scoreValue}>20/20</Text>
                            </View>
                            <View style={styles.scoreBarContainer}>
                              <View style={styles.scoreBarBackground}>
                                <View 
                                  style={[
                                    styles.scoreBarFill,
                                    { 
                                      width: `${(20/20) * 100}%`,
                                      backgroundColor: '#4CAF50'
                                    }
                                  ]}
                                />
                              </View>
                            </View>
                          </View>

                          <View style={styles.scoreCard}>
                            <View style={styles.scoreHeader}>
                              <Text style={styles.scoreLabel}>Бие даалт</Text>
                              <Text style={styles.scoreValue}>28/30</Text>
                            </View>
                            <View style={styles.scoreBarContainer}>
                              <View style={styles.scoreBarBackground}>
                                <View 
                                  style={[
                                    styles.scoreBarFill,
                                    { 
                                      width: `${(28/30) * 100}%`,
                                      backgroundColor: '#9C27B0'
                                    }
                                  ]}
                                />
                              </View>
                            </View>
                          </View>

                          <View style={styles.scoreCard}>
                            <View style={styles.scoreHeader}>
                              <Text style={styles.scoreLabel}>Бие даалт 2</Text>
                              <View style={styles.pendingBadge}>
                                <Text style={styles.pendingBadgeText}>Хийгдээгүй</Text>
                              </View>
                            </View>
                            <View style={styles.scoreBarContainer}>
                              <View style={styles.scoreBarBackground}>
                                <View 
                                  style={[
                                    styles.scoreBarFill,
                                    { 
                                      width: '0%',
                                      backgroundColor: '#9E9E9E'
                                    }
                                  ]}
                                />
                              </View>
                            </View>
                          </View>
                        </>
                      )}

                      {selectedClass.code === 'CS310' && (
                        <>
                          <View style={styles.scoreCard}>
                            <View style={styles.scoreHeader}>
                              <Text style={styles.scoreLabel}>Явц 1</Text>
                              <Text style={styles.scoreValue}>12/20</Text>
                            </View>
                            <View style={styles.scoreBarContainer}>
                              <View style={styles.scoreBarBackground}>
                                <View 
                                  style={[
                                    styles.scoreBarFill,
                                    { 
                                      width: `${(12/20) * 100}%`,
                                      backgroundColor: '#2196F3'
                                    }
                                  ]}
                                />
                              </View>
                            </View>
                          </View>

                          <View style={styles.scoreCard}>
                            <View style={styles.scoreHeader}>
                              <Text style={styles.scoreLabel}>Явц 2</Text>
                              <Text style={styles.scoreValue}>13/20</Text>
                            </View>
                            <View style={styles.scoreBarContainer}>
                              <View style={styles.scoreBarBackground}>
                                <View 
                                  style={[
                                    styles.scoreBarFill,
                                    { 
                                      width: `${(13/20) * 100}%`,
                                      backgroundColor: '#4CAF50'
                                    }
                                  ]}
                                />
                              </View>
                            </View>
                          </View>

                          <View style={styles.scoreCard}>
                            <View style={styles.scoreHeader}>
                              <Text style={styles.scoreLabel}>Бие даалт</Text>
                              <Text style={styles.scoreValue}>18/30</Text>
                            </View>
                            <View style={styles.scoreBarContainer}>
                              <View style={styles.scoreBarBackground}>
                                <View 
                                  style={[
                                    styles.scoreBarFill,
                                    { 
                                      width: `${(18/30) * 100}%`,
                                      backgroundColor: '#9C27B0'
                                    }
                                  ]}
                                />
                              </View>
                            </View>
                          </View>

                          <View style={styles.scoreCard}>
                            <View style={styles.scoreHeader}>
                              <Text style={styles.scoreLabel}>Бие даалт 2</Text>
                              <View style={styles.pendingBadge}>
                                <Text style={styles.pendingBadgeText}>Хийгдээгүй</Text>
                              </View>
                            </View>
                            <View style={styles.scoreBarContainer}>
                              <View style={styles.scoreBarBackground}>
                                <View 
                                  style={[
                                    styles.scoreBarFill,
                                    { 
                                      width: '0%',
                                      backgroundColor: '#9E9E9E'
                                    }
                                  ]}
                                />
                              </View>
                            </View>
                          </View>
                        </>
                      )}

                      {selectedClass.code === 'MATH201' && (
                        <>
                          <View style={styles.scoreCard}>
                            <View style={styles.scoreHeader}>
                              <Text style={styles.scoreLabel}>Явц 1</Text>
                              <Text style={styles.scoreValue}>16/20</Text>
                            </View>
                            <View style={styles.scoreBarContainer}>
                              <View style={styles.scoreBarBackground}>
                                <View 
                                  style={[
                                    styles.scoreBarFill,
                                    { 
                                      width: `${(16/20) * 100}%`,
                                      backgroundColor: '#2196F3'
                                    }
                                  ]}
                                />
                              </View>
                            </View>
                          </View>

                          <View style={styles.scoreCard}>
                            <View style={styles.scoreHeader}>
                              <Text style={styles.scoreLabel}>Явц 2</Text>
                              <Text style={styles.scoreValue}>15/20</Text>
                            </View>
                            <View style={styles.scoreBarContainer}>
                              <View style={styles.scoreBarBackground}>
                                <View 
                                  style={[
                                    styles.scoreBarFill,
                                    { 
                                      width: `${(15/20) * 100}%`,
                                      backgroundColor: '#4CAF50'
                                    }
                                  ]}
                                />
                              </View>
                            </View>
                          </View>

                          <View style={styles.scoreCard}>
                            <View style={styles.scoreHeader}>
                              <Text style={styles.scoreLabel}>Бие даалт</Text>
                              <Text style={styles.scoreValue}>22/30</Text>
                            </View>
                            <View style={styles.scoreBarContainer}>
                              <View style={styles.scoreBarBackground}>
                                <View 
                                  style={[
                                    styles.scoreBarFill,
                                    { 
                                      width: `${(22/30) * 100}%`,
                                      backgroundColor: '#9C27B0'
                                    }
                                  ]}
                                />
                              </View>
                            </View>
                          </View>

                          <View style={styles.scoreCard}>
                            <View style={styles.scoreHeader}>
                              <Text style={styles.scoreLabel}>Бие даалт 2</Text>
                              <View style={styles.pendingBadge}>
                                <Text style={styles.pendingBadgeText}>Хийгдээгүй</Text>
                              </View>
                            </View>
                            <View style={styles.scoreBarContainer}>
                              <View style={styles.scoreBarBackground}>
                                <View 
                                  style={[
                                    styles.scoreBarFill,
                                    { 
                                      width: '0%',
                                      backgroundColor: '#9E9E9E'
                                    }
                                  ]}
                                />
                              </View>
                            </View>
                          </View>
                        </>
                      )}
                    </View>

                    <View style={styles.totalScoreCard}>
                      <View style={styles.totalScoreHeader}>
                        <Text style={styles.totalScoreLabel}>Нийт дүн</Text>
                        <Text style={styles.totalScoreValue}>
                          {selectedClass.code === 'CS304' ? '60/70' :
                           selectedClass.code === 'CS306' ? '49/70' :
                           selectedClass.code === 'CS308' ? '67/70' :
                           selectedClass.code === 'CS310' ? '43/70' :
                           '53/70'}
                        </Text>
                      </View>
                      <View style={styles.totalScoreBarBackground}>
                        <View 
                          style={[
                            styles.totalScoreBarFill,
                            { 
                              width: `${selectedClass.code === 'CS304' ? (60/70) * 100 :
                                     selectedClass.code === 'CS306' ? (49/70) * 100 :
                                     selectedClass.code === 'CS308' ? (67/70) * 100 :
                                     selectedClass.code === 'CS310' ? (43/70) * 100 :
                                     (53/70) * 100}%`,
                              backgroundColor: '#FF9800'
                            }
                          ]}
                        />
                      </View>
                    </View>
                  </View>

                  {/* Даалгаврууд хэсэг */}
                  {selectedClass.details.seminarTasks.length > 0 && (
                    <View style={styles.detailSection}>
                      <View style={styles.sectionHeader}>
                        <Text style={styles.detailSectionTitle}>Даалгаврууд</Text>
                        <View style={styles.sectionBadge}>
                          <Text style={styles.sectionBadgeText}>2</Text>
                        </View>
                      </View>
                      <View style={styles.tasksContainer}>
                        {selectedClass.details.seminarTasks.map((task, index) => (
                          <View key={index} style={styles.taskCard}>
                            <View style={styles.taskInfo}>
                              <Text style={styles.taskTitle}>{task.title}</Text>
                              <Text style={styles.taskDue}>Дуусах: {task.due}</Text>
                            </View>
                            <View style={[
                              styles.taskStatus,
                              { backgroundColor: getTaskStatusColor(task.status) }
                            ]}>
                              <Text style={styles.taskStatusText}>
                                {task.status === 'done' ? 'Дууссан' : 'Хийгдэж байгаа'}
                              </Text>
                            </View>
                          </View>
                        ))}
                      </View>
                    </View>
                  )}
                </ScrollView>
              </>
            )}
          </View>
        </View>
      </Modal>

      {/* Schedule Class Details Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={scheduleModalVisible}
        onRequestClose={closeScheduleModal}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            {selectedScheduleClass && (
              <>
                <View style={styles.modalHeader}>
                  <View>
                    <Text style={styles.modalTitle}>{selectedScheduleClass.subject}</Text>
                    <Text style={styles.modalSubtitle}>{selectedScheduleClass.code} | {selectedScheduleClass.time} | {selectedScheduleClass.type}</Text>
                  </View>
                  <TouchableOpacity onPress={closeScheduleModal} style={styles.closeButton}>
                    <Text style={styles.closeButtonText}>✕</Text>
                  </TouchableOpacity>
                </View>
                
                <ScrollView style={styles.modalBody}>
                  <View style={styles.detailSection}>
                    <Text style={styles.detailSectionTitle}>Ирц</Text>
                    
                    <View style={styles.progressContainer}>
                      <View style={styles.progressBarBackground}>
                        <View 
                          style={[
                            styles.progressBarFill,
                            { 
                              width: `${selectedScheduleClass.details.attendance.present / selectedScheduleClass.details.attendance.total * 100}%`,
                              backgroundColor: selectedScheduleClass.type === 'Лекц' ? '#2196F3' : '#4CAF50'
                            }
                          ]}
                        />
                      </View>
                      <Text style={styles.progressText}>
                        {selectedScheduleClass.details.attendance.present}/{selectedScheduleClass.details.attendance.total} ({selectedScheduleClass.details.attendance.percentage})
                      </Text>
                    </View>
                    
                    <View style={styles.statsContainer}>
                      <View style={styles.statItem}>
                        <Text style={styles.statValue}>{selectedScheduleClass.details.attendance.present}</Text>
                        <Text style={styles.statLabel}>Ирсэн</Text>
                      </View>
                      <View style={styles.statItem}>
                        <Text style={styles.statValue}>{selectedScheduleClass.details.attendance.absent}</Text>
                        <Text style={styles.statLabel}>Тасалсан</Text>
                      </View>
                      <View style={styles.statItem}>
                        <Text style={styles.statValue}>{selectedScheduleClass.details.attendance.total}</Text>
                        <Text style={styles.statLabel}>Нийт</Text>
                      </View>
                    </View>
                  </View>
                  
                  {selectedScheduleClass.type === 'Семинар' && (
                    <View style={styles.detailSection}>
                      <Text style={styles.detailSectionTitle}>Семинарын даалгавар</Text>
                      {selectedScheduleClass.details.seminarTasks.map((task, index) => (
                        <View key={index} style={styles.taskItem}>
                          <View style={styles.taskInfo}>
                            <Text style={styles.taskTitle}>{task.title}</Text>
                            <Text style={styles.taskDue}>Дуусах хугацаа: {task.due}</Text>
                          </View>
                          <View style={[
                            styles.taskStatus,
                            { backgroundColor: getTaskStatusColor(task.status) }
                          ]}>
                            <Text style={styles.taskStatusText}>
                              {task.status === 'done' ? 'Дууссан' : 'Хийгдэж байгаа'}
                            </Text>
                          </View>
                        </View>
                      ))}
                    </View>
                  )}
                </ScrollView>
              </>
            )}
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FA',
  },
  header: {
    paddingTop: Platform.OS === 'ios' ? 50 : 20,
    paddingBottom: 20,
    paddingHorizontal: 20,
    backgroundColor: '#2B2B40',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: '#FFFFFF',
    textAlign: 'center',
  },
  content: {
    flex: 1,
  },
  contentContainer: {
    paddingBottom: 30,
  },
  userInfoSection: {
    padding: 25,
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    margin: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  userName: {
    fontSize: 22,
    fontWeight: '700',
    color: '#2B2B40',
    marginBottom: 8,
  },
  userBadge: {
    backgroundColor: '#E3F2FD',
    alignSelf: 'flex-start',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
    marginBottom: 12,
  },
  userBadgeText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#1976D2',
  },
  userDetails: {
    fontSize: 14,
    color: '#616161',
    marginBottom: 6,
    lineHeight: 20,
  },
  semesterContainer: {
    marginTop: 12,
    paddingTop: 12,
    borderTopWidth: 1,
    borderTopColor: '#EEEEEE',
  },
  semesterInfo: {
    fontSize: 13,
    color: '#757575',
    fontWeight: '500',
  },
  tabsContainer: {
    flexDirection: 'row',
    marginHorizontal: 20,
    marginBottom: 10,
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 12,
    borderRadius: 8,
    position: 'relative',
  },
  activeTab: {
    backgroundColor: 'transparent',
  },
  tabText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#757575',
  },
  activeTabText: {
    color: '#2B2B40',
    fontWeight: '600',
  },
  activeTabIndicator: {
    position: 'absolute',
    bottom: 2,
    height: 3,
    width: '50%',
    backgroundColor: '#2B2B40',
    borderRadius: 3,
  },
  sectionContainer: {
    marginTop: 10,
    paddingHorizontal: 20,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#2B2B40',
  },
  seeAllText: {
    fontSize: 14,
    color: '#2B2B40',
    fontWeight: '500',
    opacity: 0.7,
  },
  dateText: {
    fontSize: 14,
    color: '#757575',
    fontWeight: '500',
  },
  notificationsContainer: {
    marginBottom: 5,
  },
  notificationCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  warningCard: {
    borderLeftWidth: 4,
    borderLeftColor: '#F44336',
  },
  announcementCard: {
    borderLeftWidth: 4,
    borderLeftColor: '#FFC107',
  },
  teacherCard: {
    borderLeftWidth: 4,
    borderLeftColor: '#4CAF50',
  },
  notificationIconContainer: {
    marginRight: 12,
  },
  notificationIcon: {
    fontSize: 24,
  },
  warningIcon: {
    color: '#F44336',
  },
  announcementIcon: {
    color: '#FFC107',
  },
  teacherIcon: {
    color: '#4CAF50',
  },
  notificationText: {
    flex: 1,
    fontSize: 14,
    color: '#424242',
    lineHeight: 20,
  },
  scheduleScrollContainer: {
    paddingRight: 20,
  },
  scheduleCard: {
    width: width * 0.65,
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 16,
    marginRight: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  scheduleDay: {
    fontSize: 16,
    fontWeight: '700',
    color: '#2B2B40',
    marginBottom: 12,
    paddingBottom: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#EEEEEE',
  },
  scheduleItem: {
    marginBottom: 12,
  },
  scheduleTime: {
    fontSize: 13,
    color: '#757575',
    marginBottom: 4,
    fontWeight: '500',
  },
  scheduleDetails: {
    backgroundColor: '#F5F5F5',
    borderRadius: 8,
    padding: 10,
  },
  scheduleSubject: {
    fontSize: 15,
    fontWeight: '600',
    color: '#2B2B40',
    marginBottom: 4,
  },
  scheduleMeta: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 4,
  },
  scheduleCode: {
    fontSize: 12,
    color: '#757575',
  },
  scheduleRoom: {
    fontSize: 12,
    color: '#757575',
  },
  scheduleType: {
    fontSize: 12,
    color: '#2B2B40',
    fontWeight: '500',
    fontStyle: 'italic',
  },
  classesContainer: {
    marginBottom: 20,
  },
  courseCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  courseHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 16,
  },
  courseTitleContainer: {
    flex: 1,
    marginRight: 12,
  },
  courseName: {
    fontSize: 17,
    fontWeight: '600',
    color: '#2B2B40',
    marginBottom: 4,
  },
  courseCode: {
    fontSize: 14,
    color: '#757575',
  },
  courseProgress: {
    marginBottom: 16,
  },
  progressSection: {
    marginBottom: 12,
  },
  progressLabel: {
    fontSize: 14,
    color: '#616161',
    marginBottom: 8,
  },
  progressBarBackground: {
    height: 6,
    backgroundColor: '#EEEEEE',
    borderRadius: 3,
    marginBottom: 4,
    overflow: 'hidden',
  },
  progressBarFill: {
    height: '100%',
    borderRadius: 3,
  },
  progressText: {
    fontSize: 12,
    color: '#757575',
  },
  tasksSection: {
    backgroundColor: '#F5F5F5',
    borderRadius: 8,
    padding: 12,
  },
  tasksLabel: {
    fontSize: 13,
    color: '#616161',
    marginBottom: 8,
  },
  taskItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  taskTitle: {
    fontSize: 13,
    color: '#2B2B40',
    flex: 1,
    marginRight: 8,
  },
  taskDue: {
    fontSize: 12,
    color: '#757575',
  },
  courseFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 8,
  },
  courseInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  courseRoom: {
    fontSize: 13,
    color: '#757575',
    marginRight: 12,
  },
  courseSchedule: {
    fontSize: 13,
    color: '#757575',
  },
  detailsButton: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
    backgroundColor: '#F5F5F5',
  },
  detailsButtonText: {
    fontSize: 13,
    color: '#2B2B40',
    fontWeight: '500',
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '90%',
    maxHeight: '80%',
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 20,
    elevation: 5,
  },
  modalHeader: {
    backgroundColor: '#2B2B40',
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  modalHeaderContent: {
    flex: 1,
    marginRight: 12,
  },
  modalTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: '#FFFFFF',
    marginBottom: 4,
  },
  modalSubtitle: {
    fontSize: 15,
    color: 'rgba(255, 255, 255, 0.8)',
  },
  closeButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  closeButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  modalBody: {
    padding: 20,
  },
  detailSection: {
    marginBottom: 24,
  },
  detailSectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#2B2B40',
  },
  sectionBadge: {
    backgroundColor: '#E3F2FD',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
  },
  sectionBadgeText: {
    fontSize: 13,
    fontWeight: '600',
    color: '#1976D2',
  },
  attendanceContainer: {
    marginBottom: 16,
  },
  attendanceCard: {
    backgroundColor: '#F8F9FA',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
  },
  attendanceHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  attendanceLabel: {
    fontSize: 15,
    fontWeight: '600',
    color: '#2B2B40',
  },
  attendanceValue: {
    fontSize: 15,
    fontWeight: '600',
    color: '#757575',
  },
  progressContainer: {
    marginTop: 8,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
  },
  statCard: {
    flex: 1,
    backgroundColor: '#F8F9FA',
    borderRadius: 12,
    padding: 12,
    marginHorizontal: 4,
    alignItems: 'center',
  },
  statValue: {
    fontSize: 20,
    fontWeight: '700',
    color: '#2B2B40',
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 12,
    color: '#757575',
  },
  scoreContainer: {
    marginBottom: 16,
  },
  scoreCard: {
    backgroundColor: '#F8F9FA',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
  },
  scoreHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  scoreLabel: {
    fontSize: 15,
    fontWeight: '600',
    color: '#2B2B40',
  },
  scoreValue: {
    fontSize: 15,
    fontWeight: '600',
    color: '#757575',
  },
  scoreBarContainer: {
    marginTop: 8,
  },
  scoreBarBackground: {
    height: 6,
    backgroundColor: '#E0E0E0',
    borderRadius: 3,
    overflow: 'hidden',
  },
  scoreBarFill: {
    height: '100%',
    borderRadius: 3,
  },
  totalScoreCard: {
    backgroundColor: '#F8F9FA',
    borderRadius: 12,
    padding: 16,
  },
  totalScoreHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  totalScoreLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2B2B40',
  },
  totalScoreValue: {
    fontSize: 20,
    fontWeight: '700',
    color: '#2B2B40',
  },
  totalScoreBarBackground: {
    height: 8,
    backgroundColor: '#E0E0E0',
    borderRadius: 4,
    overflow: 'hidden',
  },
  totalScoreBarFill: {
    height: '100%',
    borderRadius: 4,
  },
  tasksContainer: {
    marginTop: 8,
  },
  taskCard: {
    backgroundColor: '#F8F9FA',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  taskInfo: {
    flex: 1,
    marginRight: 12,
  },
  taskTitle: {
    fontSize: 15,
    fontWeight: '600',
    color: '#2B2B40',
    marginBottom: 4,
  },
  taskDue: {
    fontSize: 13,
    color: '#757575',
  },
  taskStatus: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 12,
  },
  taskStatusText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  pendingBadge: {
    backgroundColor: '#FFE0B2',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
  },
  pendingBadgeText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#F57C00',
  },
});

export default HomeScreen;

