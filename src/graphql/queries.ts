// tslint:disable
// this is an auto generated file. This will be overwritten

export const getCity = `query GetCity($id: ID!) {
  getCity(id: $id) {
    id
    name
    branchs {
      items {
        id
        branch
        open_time
        close_time
      }
      nextToken
    }
  }
}
`;
export const listCitys = `query ListCitys(
  $filter: ModelCityFilterInput
  $limit: Int
  $nextToken: String
) {
  listCitys(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      branchs {
        nextToken
      }
    }
    nextToken
  }
}
`;
export const getBranch = `query GetBranch($id: ID!) {
  getBranch(id: $id) {
    id
    branch
    open_time
    close_time
    city {
      id
      name
      branchs {
        nextToken
      }
    }
    services {
      items {
        id
        title
        price
      }
      nextToken
    }
  }
}
`;
export const listBranchs = `query ListBranchs(
  $filter: ModelBranchFilterInput
  $limit: Int
  $nextToken: String
) {
  listBranchs(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      branch
      open_time
      close_time
      city {
        id
        name
      }
      services {
        nextToken
      }
    }
    nextToken
  }
}
`;
export const getService = `query GetService($id: ID!) {
  getService(id: $id) {
    id
    title
    price
    branch {
      id
      branch
      open_time
      close_time
      city {
        id
        name
      }
      services {
        nextToken
      }
    }
    workers {
      items {
        id
        name
        email
        phone
      }
      nextToken
    }
    appointments {
      items {
        id
        client_id
        start_time
        end_time
        date
        price
        status
        owner
      }
      nextToken
    }
  }
}
`;
export const listServices = `query ListServices(
  $filter: ModelServiceFilterInput
  $limit: Int
  $nextToken: String
) {
  listServices(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      title
      price
      branch {
        id
        branch
        open_time
        close_time
      }
      workers {
        nextToken
      }
      appointments {
        nextToken
      }
    }
    nextToken
  }
}
`;
export const getWorker = `query GetWorker($id: ID!) {
  getWorker(id: $id) {
    id
    name
    email
    phone
    service {
      id
      title
      price
      branch {
        id
        branch
        open_time
        close_time
      }
      workers {
        nextToken
      }
      appointments {
        nextToken
      }
    }
    workhours {
      items {
        id
        start_time
        end_time
      }
      nextToken
    }
    appointments {
      items {
        id
        client_id
        start_time
        end_time
        date
        price
        status
        owner
      }
      nextToken
    }
  }
}
`;
export const listWorkers = `query ListWorkers(
  $filter: ModelWorkerFilterInput
  $limit: Int
  $nextToken: String
) {
  listWorkers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      email
      phone
      service {
        id
        title
        price
      }
      workhours {
        nextToken
      }
      appointments {
        nextToken
      }
    }
    nextToken
  }
}
`;
export const getHourWork = `query GetHourWork($id: ID!) {
  getHourWork(id: $id) {
    id
    start_time
    end_time
    days {
      days
    }
    worker {
      id
      name
      email
      phone
      service {
        id
        title
        price
      }
      workhours {
        nextToken
      }
      appointments {
        nextToken
      }
    }
  }
}
`;
export const listHourWorks = `query ListHourWorks(
  $filter: ModelHourWorkFilterInput
  $limit: Int
  $nextToken: String
) {
  listHourWorks(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      start_time
      end_time
      days {
        days
      }
      worker {
        id
        name
        email
        phone
      }
    }
    nextToken
  }
}
`;
export const getPayment = `query GetPayment($id: ID!) {
  getPayment(id: $id) {
    id
    name
    client_id
    appointments {
      items {
        id
        client_id
        start_time
        end_time
        date
        price
        status
        owner
      }
      nextToken
    }
  }
}
`;
export const listPayments = `query ListPayments(
  $filter: ModelPaymentFilterInput
  $limit: Int
  $nextToken: String
) {
  listPayments(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      client_id
      appointments {
        nextToken
      }
    }
    nextToken
  }
}
`;
export const getAppointment = `query GetAppointment($id: ID!) {
  getAppointment(id: $id) {
    id
    client_id
    worker {
      id
      name
      email
      phone
      service {
        id
        title
        price
      }
      workhours {
        nextToken
      }
      appointments {
        nextToken
      }
    }
    service {
      id
      title
      price
      branch {
        id
        branch
        open_time
        close_time
      }
      workers {
        nextToken
      }
      appointments {
        nextToken
      }
    }
    start_time
    end_time
    date
    price
    status
    payment {
      id
      name
      client_id
      appointments {
        nextToken
      }
    }
    owner
  }
}
`;
export const listAppointments = `query ListAppointments(
  $filter: ModelAppointmentFilterInput
  $limit: Int
  $nextToken: String
) {
  listAppointments(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      client_id
      worker {
        id
        name
        email
        phone
      }
      service {
        id
        title
        price
      }
      start_time
      end_time
      date
      price
      status
      payment {
        id
        name
        client_id
      }
      owner
    }
    nextToken
  }
}
`;
