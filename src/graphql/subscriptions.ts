// tslint:disable
// this is an auto generated file. This will be overwritten

export const onCreateService = `subscription OnCreateService {
  onCreateService {
    id
    title
    price
    appointments {
      items {
        id
        client_id
        start_time
        end_time
        date
        price
        status
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
    appointments {
      items {
        id
        client_id
        start_time
        end_time
        date
        price
        status
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
    appointments {
      items {
        id
        client_id
        start_time
        end_time
        date
        price
        status
      }
      nextToken
    }
  }
}
`;
export const onCreateAppointment = `subscription OnCreateAppointment {
  onCreateAppointment {
    id
    client_id
    service {
      id
      title
      price
      appointments {
        nextToken
      }
    }
    start_time
    end_time
    date
    price
    status
  }
}
`;
export const onUpdateAppointment = `subscription OnUpdateAppointment {
  onUpdateAppointment {
    id
    client_id
    service {
      id
      title
      price
      appointments {
        nextToken
      }
    }
    start_time
    end_time
    date
    price
    status
  }
}
`;
export const onDeleteAppointment = `subscription OnDeleteAppointment {
  onDeleteAppointment {
    id
    client_id
    service {
      id
      title
      price
      appointments {
        nextToken
      }
    }
    start_time
    end_time
    date
    price
    status
  }
}
`;
