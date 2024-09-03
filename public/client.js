Array.prototype.random = function () {
  return this[Math.floor(Math.random() * this.length)];
};

const statusMap = {
  OK: 'success',
  DOWN: 'error',
  PARTIAL_DOWN: 'warning',
};

const statusLabel = {
  OK: 'Working',
  DOWN: 'System failure',
  PARTIAL_DOWN: `Partial outage`,
};

const columnDefinitions = [
  {
    id: 'service',
    header: 'Service',
    getValue: (item) => item.service,
    alwaysVisible: true,
  },
  {
    id: 'status',
    header: 'Status',
    getValue: (item) => statusLabel[item.status],
    getStatusType: (item) => statusMap[item.status],
  },
];

const services = ['Authorization', 'Mailing', 'Message Broker', 'Reporting', 'Admin'];

const statusData = Array.from({ length: 30 }).map((_, index) => {
  return {
    service: `${index + 1} - ${services.random()}`,
    status: Object.keys(statusMap).random(),
  };
});

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const simpleInfoData = [
  {
    label: 'Region',
    value: 'US East (N. Virginia)',
  },
  {
    label: 'Status',
    value: 'Service is operating normally',
    statusType: 'success',
  },
];

function getWidgetsDefinition() {
  console.log('[client] getDef');
  return [
    {
      id: 'ServiceMe',
      title: 'ServiceMe',
      description: 'Description for ServiceMe',
      icon: 'status-info',
      definition: {
        defaultColumnSpan: 2,
        defaultRowSpan: 5,
        minColumnSpan: 2,
        minRowSpan: 5,
      },
      type: 'table',
      props: {
        columnDefinitions,
        getData: async () => {
          await sleep(1000);
          return statusData;
        },
        refreshInterval: 1000,
      },
    },
    {
      id: 'ServiceMe2',
      title: 'ServiceMe2',
      description: 'Description for ServiceMe',
      icon: 'status-info',
      definition: {
        defaultColumnSpan: 2,
        defaultRowSpan: 5,
        minColumnSpan: 2,
        minRowSpan: 5,
      },
      type: 'table',
      props: {
        columnDefinitions,
        getData: async () => {
          await sleep(1000);
          return statusData;
        },
        refreshInterval: 1000,
      },
    },
    {
      id: 'InfoMe',
      title: 'InfoMe',
      description: 'Description for InfoMe',
      icon: 'status-info',
      definition: {
        defaultColumnSpan: 2,
        defaultRowSpan: 1,
        minColumnSpan: 2,
        minRowSpan: 1,
      },
      type: 'info',
      props: {
        getData: async () => {
          await sleep(1000);
          return simpleInfoData;
        },
        refreshInterval: 1000,
      },
    },
  ];
}

function getBrandDefinition() {
  return {
    name: 'Status~Lens',
  };
}
