import React, { useState } from 'react';
import Alert from 'react-bootstrap/Alert';

export default function DVLAAlert(alert) {
  const [show, setShow] = useState(true);

  return (
    <>
      <Alert
        show={show}
        variant={alert.status}
        onClose={() => setShow(false)}
        dismissible
      >
        {alert.status === 'danger' && (
          <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
        )}
        {alert.status === 'success' && <Alert.Heading>Success</Alert.Heading>}

        <p>{alert.message}</p>
      </Alert>
    </>
  );
}
