"use client";
import Image from 'next/image';

export default function AboutHero() {
  return (
    <section className="mb-12 text-center">
      <h1 className="text-3xl md:text-4xl font-bold mb-6">關於此部落格</h1>
      <div className="max-w-3xl mx-auto">
        <p className="text-xl text-gray-600 mb-8">
          一個結合 AI 協作與極簡開發的現代化 React 部落格
        </p>
      </div>
      <div className="relative h-60 md:h-80 w-full rounded-lg overflow-hidden mb-8">
        {/* Background hero image */}
        <Image 
          src="/images/AboutHero.jpg"
          alt="Hero background"
          fill
          priority
          className="object-cover object-center z-0"
          sizes="100vw"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 z-10" />
        {/* Text overlay */}
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <h2 className="text-4xl md:text-5xl font-bold text-white shadow-text">Ian&apos;s Mike Coding Blog</h2>
        </div>
      </div>
      <style jsx>{`
        .shadow-text {
          text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.7);
        }
      `}</style>
    </section>
  );
}
