'use client';

import { useEffect } from 'react';
import Modal from 'react-modal';

export default function ModalInit() {
  useEffect(() => {
    Modal.setAppElement('#modal-root');
  }, []);

  return null;
}
