export const Priority = {
  LOW: 'Low',
  MEDIUM: 'Medium',
  HIGH: 'High',
}

export const Priorities = [
  Priority.LOW,
  Priority.MEDIUM,
  Priority.HIGH,
]

export const Frequency = {
  DAILY: "DAILY",
  WEEKLY: "WEEKLY",
  MONTHLY: "MONTHLY",
  YEARLY: "YEARLY",
}

export const Frequencies = [
  {name: "Daily", key: Frequency.DAILY},
  {name: "Weely", key: Frequency.WEEKLY},
  {name: "Monthly", key: Frequency.MONTHLY},
  {name: "Yearly", key: Frequency.YEARLY},
]

export const RecurrenceMode = {
  AFTER_DUE: "AFTER_DUE",
  AFTER_COMPLETE: "AFTER_COMPLETE",
}

export const RecurrenceModes = [
  {name: "after due", key: RecurrenceMode.AFTER_DUE},
  {name: "after complete", key: RecurrenceMode.AFTER_COMPLETE},
]

