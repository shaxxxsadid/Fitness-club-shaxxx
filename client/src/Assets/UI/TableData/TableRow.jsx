import React, { useContext, useEffect } from 'react';
import Table from './Table';
import module from "../styles/shedule.module.css";
import { observer } from 'mobx-react-lite';
import { Context } from '../../..';

const TableRow = (props) => {
    return (
        <tr>
            <td className={module.dataItem}>{props.time}</td>
            <Table className={module.dataItem} time={props.time} day={1} />
            <Table className={module.dataItem} time={props.time} day={2} />
            <Table className={module.dataItem} time={props.time} day={3} />
            <Table className={module.dataItem} time={props.time} day={4} />
            <Table className={module.dataItem} time={props.time} day={5} />
            <Table className={module.dataItem} time={props.time} day={6} />
            <Table className={module.dataItem} time={props.time} day={7} />
        </tr>
    );
};

export default TableRow;