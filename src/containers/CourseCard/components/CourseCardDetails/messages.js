import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  accessExpired: {
    id: 'learner-dash.courseCard.CourseCardDetails.accessExpired',
    description: 'Course access expiration date message on course card for expired access.',
    defaultMessage: 'Hết hạn truy cập vào {accessExpirationDate}',
  },
  accessExpires: {
    id: 'learner-dash.courseCard.CourseCardDetails.accessExpires',
    description: 'Course access expiration date message on course card.',
    defaultMessage: 'Truy cập sẽ hết hạn vào {accessExpirationDate}',
  },
  courseEnded: {
    id: 'learner-dash.courseCard.CourseCardDetails.courseEnded',
    description: 'Course ended message on course card.',
    defaultMessage: 'Khóa học đã kết thúc vào {endDate}',
  },
  courseEnds: {
    id: 'learner-dash.courseCard.CourseCardDetails.courseEnds',
    description: 'Course ending message on course card.',
    defaultMessage: 'Khóa học kết thúc vào {endDate}',
  },
  courseStarts: {
    id: 'learner-dash.courseCard.CourseCardDetails.courseStarts',
    description: 'Course start date message on course card.',
    defaultMessage: 'Khóa học bắt đầu vào {startDate}',
  },
  unknownProviderName: {
    id: 'learner-dash.courseCard.CourseCardDetails.unknownProviderName',
    description: 'Provider name display when name is unknown',
    defaultMessage: 'Không xác định',
  },
  changeOrLeaveSessionButton: {
    id: 'learner-dash.courseCard.CourseCardDetails.changeOrLeaveSessionButton',
    description: 'Button for trigger change or leave session for entitlement course',
    defaultMessage: 'Thay đổi hoặc rời khỏi khóa học',
  },
});

export default messages;
