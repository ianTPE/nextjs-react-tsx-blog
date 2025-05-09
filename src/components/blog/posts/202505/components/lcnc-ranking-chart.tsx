'use client';

import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LabelList, Cell } from 'recharts';

// 天青色的十六進制代碼
const TIAN_QING_COLOR = '#88CCCA';

const data = [
  {
    name: 'MVP與快速原型開發',
    score: 90,
    description: '初創企業和創新項目對快速驗證概念的需求龐大',
    color: TIAN_QING_COLOR
  },
  {
    name: '企業應用與流程自動化',
    score: 85,
    description: '企業數位轉型推動大量流程自動化需求',
    color: TIAN_QING_COLOR
  },
  {
    name: '內部工具與管理後台',
    score: 75,
    description: '企業需要定制化內部系統提升效率',
    color: TIAN_QING_COLOR
  },
  {
    name: '行動應用與跨平台部署',
    score: 65,
    description: '行動應用需求持續但開發複雜度較高',
    color: TIAN_QING_COLOR
  },
  {
    name: '電商與客戶關係管理(CRM)',
    score: 60,
    description: '競爭激烈且通常需要長期合作關係',
    color: TIAN_QING_COLOR
  },
  {
    name: '數據分析與儀表板',
    score: 55,
    description: '企業通常傾向於內部處理敏感數據',
    color: TIAN_QING_COLOR
  }
];

const RankingChart = () => {
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold text-center mb-6">低代碼/無代碼應用領域：自由工作者前景排名</h2>
      <div className="mb-8">
        <ResponsiveContainer width="100%" height={400}>
          <BarChart
            data={data}
            layout="vertical"
            margin={{ top: 20, right: 30, left: 160, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis type="number" domain={[0, 100]} />
            <YAxis dataKey="name" type="category" width={150} />
            <Tooltip 
              formatter={(value) => [`前景評分: ${value}/100`, '']}
              labelFormatter={(label) => `${label}`}
              wrapperStyle={{ 
                backgroundColor: '#fff',
                border: '1px solid #ccc',
                borderRadius: '5px',
                padding: '10px'
              }}
            />
            <Bar 
              dataKey="score" 
              name="前景評分" 
              isAnimationActive={true}
              animationDuration={1500}
            >
              {data.map((entry) => (
                <LabelList 
                  key={entry.name}
                  dataKey="score" 
                  position="right" 
                  style={{ fontWeight: 'bold' }} 
                />
              ))}
              {data.map((entry) => (
                <Cell key={entry.name} fill={entry.color} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="text-center text-sm text-gray-600">
        *評分基於市場需求、專案特性和自由工作適合度綜合評估
      </div>
    </div>
  );
};

export default RankingChart;
