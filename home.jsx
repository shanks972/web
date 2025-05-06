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
            attendance: { present: 12, absent: 3, total: 15, percentage: "80%" },
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
            attendance: { present: 10, absent: 5, total: 15, percentage: "67%" },
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
            attendance: { present: 14, absent: 1, total: 15, percentage: "93%" },
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
            attendance: { present: 14, absent: 1, total: 15, percentage: "93%" },
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
            attendance: { present: 9, absent: 6, total: 15, percentage: "60%" },
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
            attendance: { present: 11, absent: 4, total: 15, percentage: "73%" },
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
            attendance: { present: 12, absent: 3, total: 15, percentage: "80%" },
            seminarTasks: [
              { title: "Хүснэгтэй ажиллах", due: "2023-03-19", status: "done" },
              { title: "SQL query бичих", due: "2023-03-26", status: "pending" }
            ]
          }
        },
        { 
          time: "14:00 - 15:30", 
          subject: "Англи хэл", 
          code: "ENG103", 
          room: "210",
          type: "Лекц",
          details: {
            attendance: { present: 13, absent: 2, total: 15, percentage: "87%" },
            seminarTasks: []
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
            attendance: { present: 10, absent: 5, total: 15, percentage: "67%" },
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
            attendance: { present: 8, absent: 7, total: 15, percentage: "53%" },
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
            attendance: { present: 12, absent: 3, total: 15, percentage: "80%" },
            seminarTasks: []
          }
        },
        { 
          time: "10:00 - 11:30", 
          subject: "Англи хэл", 
          code: "ENG103", 
          room: "210",
          type: "Семинар",
          details: {
            attendance: { present: 15, absent: 0, total: 15, percentage: "100%" },
            seminarTasks: [
              { title: "Эссе бичих", due: "2023-03-21", status: "done" },
              { title: "Презентаци бэлтгэх", due: "2023-03-28", status: "pending" }
            ]
          }
        },
        { 
          time: "14:00 - 15:30", 
          subject: "Философи", 
          code: "PHIL101", 
          room: "107",
          type: "Лекц",
          details: {
            attendance: { present: 9, absent: 6, total: 15, percentage: "60%" },
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
        lectureAttendance: { present: 12, absent: 3, total: 15, percentage: "80%" },
        seminarAttendance: { present: 10, absent: 2, total: 12, percentage: "83%" },
        scores: { seminar: 20, assignment: 15, total: 35 },
        seminarTasks: [
          { title: "Объект хандалтын програмчлал", due: "2023-03-20", status: "done" },
          { title: "Интерфэйс бүтээх", due: "2023-03-27", status: "pending" }
        ]
      }
    },
    {
      time: "10:00 - 11:30",
      subject: "Өгөгдлийн сан",
      code: "CS306",
      type: "Семинар",
      status: "missed",
      room: "205",
      details: {
        lectureAttendance: { present: 8, absent: 4, total: 12, percentage: "67%" },
        seminarAttendance: { present: 7, absent: 5, total: 12, percentage: "58%" },
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
        lectureAttendance: { present: 14, absent: 1, total: 15, percentage: "93%" },
        seminarAttendance: { present: 12, absent: 0, total: 12, percentage: "100%" },
        scores: { seminar: 5, assignment: 30, total: 35 },
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
          </>
        )}

        {activeTab === 'Хичээл' && (
          <View style={styles.sectionContainer}>
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionTitle}>Өнөөдрийн хичээлүүд</Text>
              
            </View>
            <View style={styles.classesContainer}>
              {todayClasses.map((classItem, index) => (
                <TouchableOpacity 
                  key={index} 
                  style={styles.classCard}
                  onPress={() => openClassDetails(classItem)}
                  activeOpacity={0.8}
                >
                  <View style={styles.classHeader}>
                    <Text style={styles.classTime}>{classItem.time}</Text>
                    <View style={[
                      styles.statusBadge,
                      { backgroundColor: getStatusColor(classItem.status) }
                    ]}>
                      <Text style={styles.classStatus}>
                        {classItem.status === 'attended' ? 'Ирсэн' : 
                        classItem.status === 'missed' ? 'Тасалсан' : 'Хүлээгдэж буй'}
                      </Text>
                    </View>
                  </View>
                  <Text style={styles.className}>{classItem.subject}</Text>
                  <View style={styles.classMeta}>
                    <Text style={styles.classCode}>{classItem.code}</Text>
                    <Text style={styles.classRoom}>{classItem.room} тоот</Text>
                    <Text style={styles.classType}>{classItem.type}</Text>
                  </View>
                  <View style={styles.detailsButton}>
                    <Text style={styles.detailsButtonText}>Дэлгэрэнгүй</Text>
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
                  <View>
                    <Text style={styles.modalTitle}>{selectedClass.subject}</Text>
                    <Text style={styles.modalSubtitle}>{selectedClass.code} | {selectedClass.time} | {selectedClass.type}</Text>
                  </View>
                  <TouchableOpacity onPress={closeModal} style={styles.closeButton}>
                    <Text style={styles.closeButtonText}>✕</Text>
                  </TouchableOpacity>
                </View>
                
                <ScrollView style={styles.modalBody}>
                  <View style={styles.detailSection}>
                    <Text style={styles.detailSectionTitle}>Ирц</Text>
                    
                    <Text style={styles.attendanceTypeTitle}>Лекцийн ирц:</Text>
                    <View style={styles.progressContainer}>
                      <View style={styles.progressBarBackground}>
                        <View 
                          style={[
                            styles.progressBarFill,
                            { 
                              width: `${selectedClass.details.lectureAttendance.present / selectedClass.details.lectureAttendance.total * 100}%`,
                              backgroundColor: '#2196F3'
                            }
                          ]}
                        />
                      </View>
                      <Text style={styles.progressText}>
                        {selectedClass.details.lectureAttendance.present}/{selectedClass.details.lectureAttendance.total} ({selectedClass.details.lectureAttendance.percentage})
                      </Text>
                    </View>
                    
                    <Text style={styles.attendanceTypeTitle}>Семинарын ирц:</Text>
                    <View style={styles.progressContainer}>
                      <View style={styles.progressBarBackground}>
                        <View 
                          style={[
                            styles.progressBarFill,
                            { 
                              width: `${selectedClass.details.seminarAttendance.present / selectedClass.details.seminarAttendance.total * 100}%`,
                              backgroundColor: '#4CAF50'
                            }
                          ]}
                        />
                      </View>
                      <Text style={styles.progressText}>
                        {selectedClass.details.seminarAttendance.present}/{selectedClass.details.seminarAttendance.total} ({selectedClass.details.seminarAttendance.percentage})
                      </Text>
                    </View>
                    
                    <View style={styles.statsContainer}>
                      <View style={styles.statItem}>
                        <Text style={styles.statValue}>{selectedClass.details.lectureAttendance.present}</Text>
                        <Text style={styles.statLabel}>Лекц ирсэн</Text>
                      </View>
                      <View style={styles.statItem}>
                        <Text style={styles.statValue}>{selectedClass.details.seminarAttendance.present}</Text>
                        <Text style={styles.statLabel}>Семинар ирсэн</Text>
                      </View>
                      <View style={styles.statItem}>
                        <Text style={styles.statValue}>{selectedClass.details.lectureAttendance.total}</Text>
                        <Text style={styles.statLabel}>Нийт лекц</Text>
                      </View>
                      <View style={styles.statItem}>
                        <Text style={styles.statValue}>{selectedClass.details.seminarAttendance.total}</Text>
                        <Text style={styles.statLabel}>Нийт семинар</Text>
                      </View>
                    </View>
                  </View>
                  
                  <View style={styles.detailSection}>
                    <Text style={styles.detailSectionTitle}>Дүн</Text>
                    
                    <View style={styles.scoreItem}>
                      <Text style={styles.scoreLabel}>Семинар:</Text>
                      <View style={styles.scoreBarContainer}>
                        <View style={styles.scoreBarBackground}>
                          <View 
                            style={[
                              styles.scoreBarFill,
                              { 
                                width: `${selectedClass.details.scores.seminar / 20 * 100}%`,
                                backgroundColor: '#2196F3'
                              }
                            ]}
                          />
                        </View>
                        <Text style={styles.scoreValue}>{selectedClass.details.scores.seminar}/20</Text>
                      </View>
                    </View>
                    
                    <View style={styles.scoreItem}>
                      <Text style={styles.scoreLabel}>Бие даалт:</Text>
                      <View style={styles.scoreBarContainer}>
                        <View style={styles.scoreBarBackground}>
                          <View 
                            style={[
                              styles.scoreBarFill,
                              { 
                                width: `${selectedClass.details.scores.assignment / 30 * 100}%`,
                                backgroundColor: '#9C27B0'
                              }
                            ]}
                          />
                        </View>
                        <Text style={styles.scoreValue}>{selectedClass.details.scores.assignment}/30</Text>
                      </View>
                    </View>
                    
                    <View style={styles.totalScoreContainer}>
                      <Text style={styles.totalScoreLabel}>Нийт дүн:</Text>
                      <Text style={styles.totalScoreValue}>{selectedClass.details.scores.total}/50</Text>
                      <View style={styles.totalScoreBarBackground}>
                        <View 
                          style={[
                            styles.totalScoreBarFill,
                            { 
                              width: `${selectedClass.details.scores.total / 50 * 100}%`,
                              backgroundColor: '#FF9800'
                            }
                          ]}
                        />
                      </View>
                    </View>
                  </View>
                  
                  <View style={styles.detailSection}>
                    <Text style={styles.detailSectionTitle}>Семинарын даалгавар</Text>
                    {selectedClass.details.seminarTasks.map((task, index) => (
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
  classCard: {
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
  classHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  classTime: {
    fontSize: 14,
    color: '#757575',
    fontWeight: '500',
  },
  statusBadge: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
  },
  classStatus: {
    fontSize: 12,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  className: {
    fontSize: 17,
    fontWeight: '600',
    color: '#2B2B40',
    marginBottom: 8,
  },
  classMeta: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  classCode: {
    fontSize: 14,
    color: '#757575',
  },
  classRoom: {
    fontSize: 14,
    color: '#757575',
  },
  classType: {
    fontSize: 14,
    color: '#2B2B40',
    fontWeight: '500',
    fontStyle: 'italic',
  },
  detailsButton: {
    alignSelf: 'flex-end',
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
    borderRadius: 20,
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
  modalTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#FFFFFF',
  },
  modalSubtitle: {
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.8)',
    marginTop: 4,
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
    marginBottom: 16,
  },
  attendanceTypeTitle: {
    fontSize: 14,
    color: '#616161',
    marginBottom: 8,
    marginTop: 12,
  },
  progressContainer: {
    marginBottom: 16,
  },
  progressBarBackground: {
    height: 8,
    backgroundColor: '#EEEEEE',
    borderRadius:4,
  marginBottom: 8,
    overflow: 'hidden',
  },
  progressBarFill: {
    height: '100%',
    borderRadius: 4,
  },
  progressText: {
    fontSize: 14,
    color: '#757575',
    textAlign: 'center',
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 12,
  },
  statItem: {
    alignItems: 'center',
    flex: 1,
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
  scoreItem: {
    marginBottom: 16,
  },
  scoreLabel: {
    fontSize: 15,
    color: '#616161',
    marginBottom: 8,
  },
  scoreBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  scoreBarBackground: {
    flex: 1,
    height: 6,
    backgroundColor: '#EEEEEE',
    borderRadius: 3,
    marginRight: 12,
    overflow: 'hidden',
  },
  scoreBarFill: {
    height: '100%',
    borderRadius: 3,
  },
  scoreValue: {
    fontSize: 14,
    color: '#757575',
    minWidth: 50,
    textAlign: 'right',
  },
  totalScoreContainer: {
    marginTop: 20,
    paddingTop: 20,
    borderTopWidth: 1,
    borderTopColor: '#EEEEEE',
  },
  totalScoreLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2B2B40',
    marginBottom: 8,
  },
  totalScoreValue: {
    fontSize: 24,
    fontWeight: '700',
    color: '#2B2B40',
    marginBottom: 12,
  },
  totalScoreBarBackground: {
    height: 8,
    backgroundColor: '#EEEEEE',
    borderRadius: 4,
    overflow: 'hidden',
  },
  totalScoreBarFill: {
    height: '100%',
    borderRadius: 4,
  },
});

export default HomeScreen;