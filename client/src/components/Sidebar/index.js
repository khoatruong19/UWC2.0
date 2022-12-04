import React, { useState } from 'react';
import { Stack, Container } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import {
  HomeIcon as OHomeIcon,
  ChartBarSquareIcon as OChartBarSquareIcon,
  ClipboardDocumentIcon as OClipboardDocumentIcon,
  ChatBubbleLeftIcon as OChatBubbleLeftIcon,
  Cog8ToothIcon as OCog8ToothIcon,
  ArrowLeftOnRectangleIcon as OArrowLeftOnRectangleIcon,
} from '@heroicons/react/24/outline';
import {
  HomeIcon,
  ChartBarSquareIcon,
  ClipboardDocumentIcon,
  ChatBubbleLeftIcon,
  Cog8ToothIcon,
} from '@heroicons/react/24/solid';
import { Link } from 'react-router-dom';
import { mainTextColor } from '../../utils/constants';

const Sidebar = () => {
  const [activeLink, setActiveLink] = useState('Home');

  const links = [
    {
      name: 'Home',
      icon: OHomeIcon,
      activeIcon: HomeIcon,
      to: '/',
    },
    {
      name: 'UserManagement',
      icon: OChartBarSquareIcon,
      activeIcon: ChartBarSquareIcon,
      to: '/employee-list',
    },
    {
      name: 'TaskAssignment',
      icon: OClipboardDocumentIcon,
      activeIcon: ClipboardDocumentIcon,
      to: '/task-assignment',
    },
    {
      name: 'Chat',
      icon: OChatBubbleLeftIcon,
      activeIcon: ChatBubbleLeftIcon,
      to: '/',
    },
    {
      name: 'Setting',
      icon: OCog8ToothIcon,
      activeIcon: Cog8ToothIcon,
      to: '/',
    },
  ];

  return (
    <div
      style={{ width: '100px', height: '100%' }}
      className="border-end border-success border-3"
    >
      <div className="d-flex justify-content-center align-items-center pt-5 mb-5">
        <Image
          roundedCircle
          alt=""
          src="https://scholarshipplanet.info/vi/wp-content/uploads/2014/11/uwc_logo-copy.jpg"
          width={60}
          className="mx-auto border border-2 border-success"
        />
      </div>
      <Stack gap={4} className="pt-5 justify-content-center align-items-center">
        {links.map((link, i) => (
          <div
            key={i}
            className="hover"
            style={{
              width: '3rem',
              color: mainTextColor,
            }}
          >
            <Link
              to={link.to}
              style={{ color: '#425F57' }}
              onClick={() => setActiveLink(link.name)}
            >
              {activeLink === link.name ? <link.activeIcon /> : <link.icon />}
            </Link>
          </div>
        ))}
        <div className="w-50 h-50 text-danger hover">
          <OArrowLeftOnRectangleIcon />
        </div>
      </Stack>
    </div>
  );
};

export default Sidebar;
