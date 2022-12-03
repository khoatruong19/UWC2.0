import React from 'react';
import EmployeeAssignment from './EmployeeAssignmentModal';
 
const janitors = [
    {
        id: 0,
        name: "John Elkann",
        age: 54,
        address: "Turin"
    },
    {
        id: 1,
        name: "John",
        age: 21,
        address: "265 Ly Thuong Kiet"
    },
    {
        id: 2,
        name: "Cena",
        age: 21,
        address: "42 Su Van Hanh"
    },
    {
        id: 3,
        name: "Bing Chilling",
        age: 21,
        address: "China"
    }
]

const collectors = [
    {
        id: 1,
        name: "John Elkann",
        status: "assigned"
    },
    {
        id: 2,
        name: "John Elkann",
        status: "assigned"
    },
    {
        id: 3,
        name: "John Elkann",
        status: "assigned"
    },
    {
        id: 41,
        name: "John Elkann",
        status: "assigned"
    },
]

export const janitorSchedule = [
    {
        workshift: "6h30",
        monday: <EmployeeAssignment employee = {janitors[0]}/>,
        tuesday: <EmployeeAssignment />,
        wednesday: <EmployeeAssignment />,
        thursday: <EmployeeAssignment />,
        friday: <EmployeeAssignment />,
        saturday: <EmployeeAssignment />,
        sunday: <EmployeeAssignment />
    },
    {
        workshift: "7h30",
        monday: <EmployeeAssignment />,
        tuesday: <EmployeeAssignment />,
        wednesday: <EmployeeAssignment />,
        thursday: <EmployeeAssignment />,
        friday: <EmployeeAssignment />,
        saturday: <EmployeeAssignment />,
        sunday: <EmployeeAssignment />
    }
]