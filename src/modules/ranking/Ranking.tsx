import React from 'react';
import { Col, Row, Table } from 'antd';
import UserService from '../../services/UserService';
import User from '../../models';
import UserInterface from '../../interfaces';
import type { ColumnsType } from 'antd/es/table';
import Header from '../../components/header/Header';

const Ranking = () => {
  const user = new User();
  const users = UserService.getUsers(user.STORAGE_KEY);

  const columns: ColumnsType<UserInterface> = [
    {
      title: 'Name',
      dataIndex: 'name',
      width: 250
    },
    {
      title: 'Max Score',
      dataIndex: 'maxScore',
      defaultSortOrder: 'descend',
      width: 170,
      sorter: (a, b) => a.maxScore - b.maxScore
    }
  ];

  return (
    <>
      <Header text={'Ranking'}/>

      <Row justify="center" className="mt-20">
        <Col>
          <Table
            columns={columns}
            dataSource={users as UserInterface[]}
            pagination={false}
            rowKey={'name'}
          />
        </Col>
      </Row>
    </>
  );
};

export default Ranking;
