import React from 'react';
import { BlogPost } from '../../types/blog';

// 用於註冊所有文章的全局註冊表
export const PostRegistry: Record<string, {
  Component: React.ComponentType;
  metadata: BlogPost;
}> = {};

// 高階組件，用於包裝每篇文章並自動註冊
export function withPostMetadata(metadata: BlogPost, Component: React.ComponentType) {
  // 自動註冊到全局註冊表
  PostRegistry[metadata.slug] = {
    Component,
    metadata
  };
  
  // 返回原始組件，但已經註冊到系統中
  return Component;
}
