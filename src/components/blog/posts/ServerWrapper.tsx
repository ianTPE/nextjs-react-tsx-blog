import React from 'react';
import { BlogPost } from '@/types/blog';
import { withPostMetadata } from '../PostWrapper';

// 服務端包裝器工廠函數
export function createServerPostWrapper(
  metadata: BlogPost,
  ClientComponent: React.ComponentType
) {
  // 創建一個服務端組件包裝器
  function ServerWrapper() {
    return <ClientComponent />;
  }

  // 返回已註冊的組件
  return withPostMetadata(metadata, ServerWrapper);
}
