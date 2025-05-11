import React from 'react';
import { BlogPost } from '../../types/blog';

// 用於註冊所有文章的全局註冊表
export const PostRegistry: Record<string, {
  Component: React.ComponentType;
  metadata: BlogPost;
}> = {};

// 簡化的高階組件
export function withPostMetadata(metadata: BlogPost, Component: React.ComponentType): React.ComponentType {
  // 註冊到全局註冊表
  PostRegistry[metadata.slug] = {
    Component,
    metadata
  };
  
  // 直接返回組件而不進行包裝
  return Component;
}
