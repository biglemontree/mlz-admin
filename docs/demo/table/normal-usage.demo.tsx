/**
 * title: 基本使用
 * desc: 通过传入 `data` 来展示表格，通过 `onChange`和 `onSearch` 等参数控制交互。
 */
import React from 'react';
import Table from '@/Table/Table';
import Button from '@/Button/Button';
import axios from 'axios';

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    primary: true,
  },
  {
    title: 'Desc',
    dataIndex: 'desc',
    ellipsis: true,
    width: 250,
  },
  {
    title: 'Cost',
    dataIndex: 'money',
    type: 'price',
  },
  {
    title: 'Status',
    dataIndex: 'status',
    type: 'enum',
    enums: {
      all: '全部',
      close: '售罄',
      running: '补货中',
      online: '正在销售',
      error: '库存不足',
    },
  },
  {
    title: 'Forwards',
    dataIndex: 'status',
    type: 'tag',
    enums: {
      all: { text: '全部', color: 'magenta' },
      close: { text: '售罄', color: 'red' },
      running: { text: '补货中', color: 'volcano', desc: 'testDesc' },
      online: { text: '正在销售', color: 'orange' },
      error: { text: '库存不足', color: 'gold' },
    },
  },
  {
    title: '操作',
    render: () => [
      <a key={1}>检查</a>,
      <Button key={2} type="primary">
        关闭
      </Button>,
    ],
  },
];

class App extends React.PureComponent {
  state = {
    data: [],
    loading: true,
  };

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async (params?: { current: number; limit: number }) => {
    this.setState({ loading: true });
    const { data } = await axios.get('http://rap2.taobao.org:38080/app/mock/252468/admini/table-demo', {
      method: 'get',
      params: params || {
        current: 1,
        limit: 10,
      },
    });
    this.setState({
      data: data.items,
      loading: false,
    });
  };

  render() {
    return <Table columns={columns} dataSource={this.state.data} loading={this.state.loading} />;
  }
}

export default App;
