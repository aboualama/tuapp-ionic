// tslint:disable
// this is an auto generated file. This will be overwritten

export const onCreateCity = `subscription OnCreateCity {
  onCreateCity {
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
export const onUpdateCity = `subscription OnUpdateCity {
  onUpdateCity {
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
export const onDeleteCity = `subscription OnDeleteCity {
  onDeleteCity {
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
export const onCreateBranch = `subscription OnCreateBranch {
  onCreateBranch {
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
export const onUpdateBranch = `subscription OnUpdateBranch {
  onUpdateBranch {
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
export const onDeleteBranch = `subscription OnDeleteBranch {
  onDeleteBranch {
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
export const onCreateService = `subscription OnCreateService {
  onCreateService {
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
export const onUpdateService = `subscription OnUpdateService {
  onUpdateService {
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
export const onDeleteService = `subscription OnDeleteService {
  onDeleteService {
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
export const onCreateWorker = `subscription OnCreateWorker {
  onCreateWorker {
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
export const onUpdateWorker = `subscription OnUpdateWorker {
  onUpdateWorker {
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
export const onDeleteWorker = `subscription OnDeleteWorker {
  onDeleteWorker {
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
export const onCreateHourWork = `subscription OnCreateHourWork {
  onCreateHourWork {
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
export const onUpdateHourWork = `subscription OnUpdateHourWork {
  onUpdateHourWork {
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
export const onDeleteHourWork = `subscription OnDeleteHourWork {
  onDeleteHourWork {
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
export const onCreatePayment = `subscription OnCreatePayment {
  onCreatePayment {
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
export const onUpdatePayment = `subscription OnUpdatePayment {
  onUpdatePayment {
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
export const onDeletePayment = `subscription OnDeletePayment {
  onDeletePayment {
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
export const onCreateAppointment = `subscription OnCreateAppointment($owner: String!) {
  onCreateAppointment(owner: $owner) {
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
export const onUpdateAppointment = `subscription OnUpdateAppointment($owner: String!) {
  onUpdateAppointment(owner: $owner) {
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
export const onDeleteAppointment = `subscription OnDeleteAppointment($owner: String!) {
  onDeleteAppointment(owner: $owner) {
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
