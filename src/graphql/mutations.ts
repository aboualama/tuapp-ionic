// tslint:disable
// this is an auto generated file. This will be overwritten

export const createCity = `mutation CreateCity($input: CreateCityInput!) {
  createCity(input: $input) {
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
export const updateCity = `mutation UpdateCity($input: UpdateCityInput!) {
  updateCity(input: $input) {
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
export const deleteCity = `mutation DeleteCity($input: DeleteCityInput!) {
  deleteCity(input: $input) {
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
export const createBranch = `mutation CreateBranch($input: CreateBranchInput!) {
  createBranch(input: $input) {
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
export const updateBranch = `mutation UpdateBranch($input: UpdateBranchInput!) {
  updateBranch(input: $input) {
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
export const deleteBranch = `mutation DeleteBranch($input: DeleteBranchInput!) {
  deleteBranch(input: $input) {
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
export const createService = `mutation CreateService($input: CreateServiceInput!) {
  createService(input: $input) {
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
export const updateService = `mutation UpdateService($input: UpdateServiceInput!) {
  updateService(input: $input) {
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
export const deleteService = `mutation DeleteService($input: DeleteServiceInput!) {
  deleteService(input: $input) {
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
export const createWorker = `mutation CreateWorker($input: CreateWorkerInput!) {
  createWorker(input: $input) {
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
export const updateWorker = `mutation UpdateWorker($input: UpdateWorkerInput!) {
  updateWorker(input: $input) {
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
export const deleteWorker = `mutation DeleteWorker($input: DeleteWorkerInput!) {
  deleteWorker(input: $input) {
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
export const createHourWork = `mutation CreateHourWork($input: CreateHourWorkInput!) {
  createHourWork(input: $input) {
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
export const updateHourWork = `mutation UpdateHourWork($input: UpdateHourWorkInput!) {
  updateHourWork(input: $input) {
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
export const deleteHourWork = `mutation DeleteHourWork($input: DeleteHourWorkInput!) {
  deleteHourWork(input: $input) {
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
export const createPayment = `mutation CreatePayment($input: CreatePaymentInput!) {
  createPayment(input: $input) {
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
export const updatePayment = `mutation UpdatePayment($input: UpdatePaymentInput!) {
  updatePayment(input: $input) {
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
export const deletePayment = `mutation DeletePayment($input: DeletePaymentInput!) {
  deletePayment(input: $input) {
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
export const createAppointment = `mutation CreateAppointment($input: CreateAppointmentInput!) {
  createAppointment(input: $input) {
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
export const updateAppointment = `mutation UpdateAppointment($input: UpdateAppointmentInput!) {
  updateAppointment(input: $input) {
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
export const deleteAppointment = `mutation DeleteAppointment($input: DeleteAppointmentInput!) {
  deleteAppointment(input: $input) {
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
