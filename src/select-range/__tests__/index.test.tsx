import React, { Component } from 'react';
import { testMount, testSnapshot } from '../../../tests';
import { mount, shallow } from 'enzyme';
import SelectRange from '..';

const courseRangeOptions = [
  {
    key: 1,
    name: '课程-1',
  },
  {
    key: 2,
    name: '课程-2',
  },
  {
    key: 3,
    name: '课程-3',
  },
];

describe('🧪 SelectRange', () => {
  testMount(SelectRange);
  testSnapshot(SelectRange);
  let wrapper;
  let body;
  const handleChange = jest.fn();

  beforeEach(() => {
    wrapper = shallow(<SelectRange selectOptions={courseRangeOptions} onChange={handleChange} />);
    body = shallow(<body />);
    console.log(body.debug());
  });

  test('是否显示了正确的对应元素', () => {
    expect(wrapper.find('.ant-select-selector').length).toBe(2);
    expect(wrapper.find('.ant-select-selection-search').length).toBe(2);
    expect(wrapper.find('.ant-select-item').length).toBe(3);
  });

  // test('点击时显示下拉列表', () => {
  //   wrapper
  //     .find('.ant-select-selector')
  //     .at(0)
  //     .simulate('change');
  //   expect(handleChange).toBeCalledTimes(1);
  // });
  test('点击下拉列表选择', () => {
    wrapper
      .find('.ant-select-item')
      .at(0)
      .simulate('click');
    expect(handleChange).toBeCalledTimes(1);
  });
});
