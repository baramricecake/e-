"use client";
import React, { useState, useEffect } from 'react';
import { Phone, ArrowRight, X } from "lucide-react";

const pageBlocks = [
  { type: 'hero', src: "/1.png" },
  { type: 'image', src: "/2.png" },
  { type: 'image', src: "/3.webp" },
  { type: 'form', id: "contact-mid" },
  { type: 'custom-banner' },
  { type: 'image', src: "/4.png" },
  { type: 'image', src: "/5.png" },
  { type: 'image', src: "/6.png" },
  { type: 'image', src: "/dev_plan.jpg" },
  { type: 'image', src: "/7.png" },
  { type: 'image', src: "/8.png" },
  { type: 'image', src: "/9.png" },
  { type: 'custom-banner' },
  { type: 'image', src: "/10.png" },
  { type: 'image', src: "/11.webp" },
  { type: 'form', id: "contact-bottom" },
];

const ReusableContactForm = () => (
  <form action="https://formspree.io/f/mzdanvld" method="POST" target="_blank" className="space-y-6">
    <div className="space-y-6 text-left">
      <div>
        <label htmlFor="name" className="block text-sm font-bold text-gray-900 mb-2">
          이름 <span className="text-[#2C3B46]">*</span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          style={{ color: '#000000', WebkitTextFillColor: '#000000' }}
          className="w-full px-4 py-3 bg-white text-black font-extrabold rounded-md border border-gray-300 focus:ring-2 focus:ring-[#FB6719] focus:border-[#FB6719] outline-none text-base transition-shadow"
        />
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-bold text-gray-900 mb-2">
          연락처 <span className="text-[#2C3B46]">*</span>
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          required
          style={{ color: '#000000', WebkitTextFillColor: '#000000' }}
          className="w-full px-4 py-3 bg-white text-black font-extrabold rounded-md border border-gray-300 focus:ring-2 focus:ring-[#FB6719] focus:border-[#FB6719] outline-none text-base transition-shadow"
        />
      </div>

      <div>
        <label htmlFor="date" className="block text-sm font-bold text-gray-900 mb-2">
          방문예약 날짜
        </label>
        <input
          type="date"
          id="date"
          name="date"
          style={{ color: '#000000', WebkitTextFillColor: '#000000' }}
          className="w-full px-4 py-3 bg-white text-black font-extrabold rounded-md border border-gray-300 focus:ring-2 focus:ring-[#FB6719] focus:border-[#FB6719] outline-none text-base transition-shadow"
        />
      </div>

      <div>
        <label htmlFor="time" className="block text-sm font-bold text-gray-900 mb-2">
          방문예약 시간
        </label>
        <select
          id="time"
          name="time"
          style={{ color: '#000000', WebkitTextFillColor: '#000000' }}
          className="w-full px-4 py-3 bg-white text-black font-extrabold rounded-md border border-gray-300 focus:ring-2 focus:ring-[#FB6719] focus:border-[#FB6719] outline-none text-base transition-shadow"
        >
          <option value="">시간 선택</option>
          <option value="10:00~11:00">10:00~11:00</option>
          <option value="11:00~12:00">11:00~12:00</option>
          <option value="12:00~13:00">12:00~13:00</option>
          <option value="13:00~14:00">13:00~14:00</option>
          <option value="14:00~15:00">14:00~15:00</option>
          <option value="15:00~16:00">15:00~16:00</option>
          <option value="16:00~17:00">16:00~17:00</option>
          <option value="17:00~18:00">17:00~18:00</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-bold text-gray-900 mb-2">
          문의사항
        </label>
        <input
          type="text"
          id="message"
          name="message"
          style={{ color: '#000000', WebkitTextFillColor: '#000000' }}
          className="w-full px-4 py-3 bg-white text-black font-extrabold rounded-md border border-gray-300 focus:ring-2 focus:ring-[#FB6719] focus:border-[#FB6719] outline-none text-base transition-shadow placeholder-gray-400"
          placeholder="ex.회사보유분 로얄층 문의, 분양가"
        />
      </div>
    </div>

    <div className="bg-gray-50 border border-gray-200 p-4 text-xs text-gray-600 mt-6 overflow-y-auto h-40 text-left leading-relaxed">
      <p className="font-bold text-gray-800 mb-1">관심고객등록에 대한 개인정보 취급방침</p>
      <p className="mb-3">아파트 분양상담, 관심고객등록, 서비스 신청 등을 위해 아래와 같은 개인정보를 수집 및 이용하고 있습니다.</p>

      <p className="font-bold text-gray-800 mb-1">개인정보 수집 및 이용 주체</p>
      <p className="mb-3">e편한세상 서울산 파크그란데(이하 '사업단지') 운영주체 010-7929-4212(이하 '운영주체')은 다음의 목적을 위하여 개인정보를 처리하고 있으며, 다음의 목적 이외의 용도로는 이용하지 않습니다.<br />운영주체는 고객님의 개인정보를 중요취급하고 개인정보 보호법 및 정보통신망 이용촉진 및 정보보호 등에 관한 법률을 준수하고 있습니다.</p>

      <p className="font-bold text-gray-800 mb-1">개인정보 수집 및 이용에 대한 동의</p>
      <p className="mb-1">(1) 수집하는 개인정보 항목</p>
      <p className="mb-1">-수집항목: 이름, 휴대전화번호 등의 전부 또는 일부</p>
      <p className="mb-2">-개인정보 수집방법: 개인정보 동의</p>
      <p className="mb-1">(2) 개인정보의 수집 및 이용 목적</p>
      <p className="mb-1">수집한 개인정보를 다음의 목적으로 이용합니다.</p>
      <p className="mb-1">-사업단지에 대한 분양정보 및 마케팅 자료 및 통계에 활용.</p>
      <p className="mb-2">-마케팅 및 광고에 활용, 이벤트 등 광고성 정보 전달, 고객사전추천(MGM), 인구통계학적 특성에 따른 서비스 제공 및 광고 게재, 접속빈도 파악 또는 회원 서비스 이용에 대한 통계 및 분양정보 안내, 아파트 계약확인 및 DM, TM 등</p>
      <p className="mb-1">(3) 개인정보의 보유 및 이용기간</p>
      <p className="mb-1">개인정보 수집 및 이용목적이 달성된 후 해당 정보를 파기합니다. 다만, 아래의 경우에는 예외로 합니다.</p>
      <p className="mb-1">-고객이 사전에 요청한 경우</p>
      <p className="mb-3">-법령의 규정에 의거하거나, 수사 목적으로 법령에 정해진 절차와 방법에 따라 수사기관의 요구가 있는 경우</p>
      <p className="mb-1">(4) 거부할 권리</p>
      <p className="mb-4">고객은 정보 수집 및 이용에 대한 동의를 거부할 권리가 있습니다. 다만 동의해야만 관심고객 등록될 수 있으며, 거부시 이용에 제한이 있을 수 있습니다.</p>

      <p className="font-bold text-gray-800 mb-1">개인정보의 제3자 제공에 대한 동의</p>
      <p className="mb-1">(1) 수집한 개인정보의 제3자 제공</p>
      <p className="mb-2">고객에게 보다 질 높은 서비스를 제공하기 위해 아래와 같이 귀하의 개인정보를 사업단지의 사업주체와 사업주체가 지정한 공식 분양대행사(분양사)에게 제공할 수 있습니다. 이에 따라 운영주체는 사업주체 또는 사업주체가 지정한 분양대행사(분양사)로부터 소개수수료(MGM)를 수령할 수 있습니다.</p>
      <p className="mb-2">(2) 제공하는 개인정보 항목: 이름, 거주 지역, 생년월일, 휴대전화번호, 청약통장종류, 청약순위, 선호평형, 성별 등의 전부 또는 일부</p>
      <p className="mb-3">(3) 제공 정보의 이용 목적: 콘텐츠 제공, 불만처리 등 민원처리, 고지사항 전달, 고객사전추천(MGM), 이벤트 등 광고성 정보 전달, 인구통계학적 특성에 따른 서비스 제공 및 광고 게재, 접속 빈도 파악 또는 회원의 서비스 이용에 대한 통계, 분양정보 안내 및 분양상담 아파트 계약확인 및 DM, TM 등</p>
      <p className="mb-1">(4) 제공 정보의 보유 및 이용기간</p>
      <p className="mb-1">개인정보 수집 및 이용목적이 달성된 후 해당 정보를 파기합니다. 다만, 아래의 경우에는 예외로 합니다.</p>
      <p className="mb-1">-고객이 사전에 요청한 경우</p>
      <p className="mb-3">-법령의 규정에 의거하거나, 수사 목적으로 법령에 정해진 절차와 방법에 따라 수사기관의 요구가 있는 경우</p>
      <p className="mb-1">(5) 거부할 권리</p>
      <p>고객은 개인정보 3자 제공에 대한 동의를 거부할 권리가 있습니다. 다만 동의해야만 관심고객 등록될 수 있으며, 거부시 이용에 제한이 있을 수 있습니다.</p>
    </div>

    {/* 체크박스 필수 */}
    <div className="mt-3 flex items-start px-1 text-left">
      <input type="checkbox" id="privacy-agree" required className="mt-1 mr-2 cursor-pointer w-4 h-4" />
      <label htmlFor="privacy-agree" className="text-sm font-bold text-gray-700 cursor-pointer select-none">
        개인정보 수집 및 이용에 동의합니다. (필수)
      </label>
    </div>

    <div className="pt-4">
      <button
        type="submit"
        className="w-full flex justify-center py-4 px-4 font-bold text-white bg-[#1E2F3F] hover:bg-[#FB6719] transition transform hover:-translate-y-1 shadow-md rounded-md text-lg"
      >
        제출하기
      </button>
    </div>
  </form>
);

export default function Home() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    // Check session storage
    if (typeof window !== 'undefined') {
      const hasSeen = sessionStorage.getItem('popup_closed');
      if (!hasSeen) {
        setShowPopup(true);
      }
    }
  }, []);

  const closePopup = (neverShowAgain: boolean) => {
    setShowPopup(false);
    if (neverShowAgain && typeof window !== 'undefined') {
      sessionStorage.setItem('popup_closed', 'true');
    }
  };

  return (
    <div className="min-h-screen bg-[#e8eaed] font-[family-name:var(--font-geist-sans)] flex flex-col items-center w-full">
      <style dangerouslySetInnerHTML={{
        __html: `
        /* 강력한 폼 텍스트 색상 강제 오버라이드 (iOS Safari 등 기기 파편화 방지) */
        input, select, textarea {
          color: #000000 !important;
          -webkit-text-fill-color: #000000 !important;
          opacity: 1 !important;
          font-weight: 800 !important;
        }
        input::placeholder, textarea::placeholder {
          color: #9ca3af !important;
          -webkit-text-fill-color: #9ca3af !important;
          font-weight: 500 !important;
        }
        @keyframes slowZoom {
          0% { transform: scale(1); }
          100% { transform: scale(1.1); }
        }
        @keyframes shimmerSlide {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-shimmer {
          animation: shimmerSlide 2.5s infinite;
        }
      `}} />

      {/* 팝업 모달 */}
      {showPopup && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 p-4 transition-opacity">
          <div className="relative max-w-[400px] w-full bg-white shadow-2xl animate-in fade-in zoom-in duration-200">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/1.png" alt="안내 팝업" className="w-full h-auto block" />
            <div className="bg-[#f8f9fa] border-t border-gray-200 p-3 flex justify-between items-center text-sm text-gray-600">
              <label className="flex items-center cursor-pointer hover:text-gray-900 select-none">
                <input
                  type="checkbox"
                  className="mr-2 w-4 h-4"
                  onChange={(e) => {
                    if (e.target.checked) closePopup(true);
                  }}
                />
                오늘 하루 보지 않기
              </label>
              <button onClick={() => closePopup(false)} className="font-bold text-gray-800 hover:text-black">닫기</button>
            </div>
          </div>
        </div>
      )}

      {/* 
        단일 프리미엄 헤더 (스크롤 고정)
      */}
      <div className="w-full bg-white shadow-md flex justify-center sticky top-0 z-50 transition-all duration-300">
        <div className="w-full max-w-6xl px-4 py-4 md:py-5 flex items-center justify-between">
          <div className="flex items-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo_1.png" alt="e편한세상 서울산 파크그란데 로고" className="h-8 md:h-10 w-auto" />
          </div>
          <a href="tel:010-8129-4477" className="hidden border border-[#1E2F3F] px-3 md:px-4 py-1.5 text-[#1E2F3F] text-sm md:flex items-center gap-1.5 hover:bg-[#1E2F3F] hover:text-[#FB6719] transition rounded-sm font-bold">
            <Phone className="w-4 h-4" />
            분양 상담
          </a>
        </div>
      </div>

      <div className="w-full relative overflow-hidden bg-gradient-to-r from-[#1E2F3F] via-[#2A435A] to-[#1E2F3F] text-white flex items-center justify-center py-3.5 text-sm md:text-base font-extrabold tracking-widest z-40 shadow-inner group cursor-pointer hover:via-[#3C5771] transition-colors duration-500">
        <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/15 to-transparent -translate-x-[100%] animate-shimmer"></div>
        <span className="w-2.5 h-2.5 rounded-full bg-[#FB6719] animate-pulse mr-2.5 shadow-[0_0_8px_rgba(251,103,25,0.8)]"></span>
        <span className="tracking-[0.2em] drop-shadow-md">선착순 동·호 지정 계약 중 !</span>
      </div>

      {/* 
        메인 콘텐츠 바디 영역 (최대 가로폭 768px 중앙 정렬)
      */}
      <main className="w-full max-w-[768px] bg-white shadow-xl relative pb-20 md:pb-24 flex flex-col items-center">

        {/* 메인 콘텐츠 순차적 매핑 */}
        <div className="w-full flex flex-col">
          {pageBlocks.map((block, idx) => {
            // 연락처 폼 섹션
            if (block.type === 'form') {
              return (
                <div key={`block-${idx}`} id={block.id} className="py-16 md:py-24 px-6 md:px-10 bg-white w-full border-t flex flex-col items-center">
                  <div className="text-center mb-12 w-full flex flex-col items-center">
                    <div className="w-12 h-1 bg-[#FB6719] mb-8 rounded-full"></div>

                    <h2 className="text-3xl md:text-4xl font-light mb-4 tracking-tighter text-[#1E2F3F] animate-in fade-in slide-in-from-bottom-4 duration-1000">
                      e편한세상 서울산 <span className="font-bold border border-[#1E2F3F] px-2 py-1 ml-1 text-2xl md:text-3xl">파크그란데</span>
                    </h2>

                    <div className="w-full flex justify-center mt-2">
                      <p className="inline-block text-[#1E2F3F] bg-gray-50 border border-gray-200 font-bold text-lg md:text-xl tracking-tight px-6 py-2 rounded-full shadow-sm">
                        방문예약 및 VIP 고객등록
                      </p>
                    </div>

                    <div className="mt-8 bg-[#1E2F3F] text-white px-8 py-3 rounded-md shadow-[0_4px_14px_0_rgba(30,47,63,0.39)] flex flex-col items-center justify-center transform transition duration-500 hover:scale-105 hover:bg-[#121c25]">
                      <span className="text-[10px] md:text-xs text-[#FB6719] mb-1 tracking-[0.2em] font-bold">PREMIUM</span>
                      <span className="font-extrabold text-lg md:text-xl tracking-wider">
                        선착순 동·호지정 계약중
                      </span>
                    </div>
                  </div>

                  <div className="w-full max-w-[600px] border-t border-dashed border-gray-300 pt-10">
                    <ReusableContactForm />
                  </div>
                </div>
              );
            }

            // 메인 히어로 섹션 (인터랙션 및 디자인 추가)
            if (block.type === 'hero') {
              return (
                <div key={`block-${idx}`} className="w-full relative overflow-hidden bg-[#1E2F3F] flex flex-col items-center justify-center min-h-[85vh] md:min-h-screen">
                  {/* 사진 가득 채우기 & 고급스러운 스케일 애니메이션 (화면 확장감) */}
                  <div className="absolute inset-0 z-0 overflow-hidden bg-black">
                    <img src={block.src} alt="e편한세상 서울산 파크그란데 메인 뷰" className="w-full h-full object-cover opacity-90" style={{ transformOrigin: 'center top', animation: 'slowZoom 20s infinite alternate ease-in-out' }} />
                  </div>

                  {/* 그라데이션 오버레이 (위/아래 텍스트 안정감을 위해) */}
                  <div className="absolute inset-0 bg-gradient-to-b from-[#1E2F3F]/30 via-transparent to-[#1a2329]/90 z-10 pointer-events-none"></div>

                  {/* 마우스 스크롤 유도 애니메이션 */}
                  <div className="absolute bottom-10 md:bottom-16 z-20 flex flex-col items-center opacity-90 animate-in fade-in duration-1000 delay-1000 fill-mode-both">
                    <span className="text-white/80 text-[10px] md:text-xs mb-2 tracking-widest uppercase font-mono animate-pulse drop-shadow-md">Scroll Down</span>
                    <div className="w-6 h-10 border-2 border-white/60 rounded-full flex justify-center p-1 shadow-sm">
                      <div className="w-1.5 h-2.5 bg-white rounded-full animate-bounce mt-1"></div>
                    </div>
                  </div>

                  {/* 키프레임 스타일 추가 */}
                  <style jsx>{`
                    @keyframes slowZoom {
                      0% { transform: scale(1); }
                      100% { transform: scale(1.1); }
                    }
                  `}</style>
                </div>
              );
            }

            // 코딩으로 구현한 새로운 고급 배너 (이미지 배너 대체)
            if (block.type === 'custom-banner') {
              return (
                <div key={`block-${idx}`} className="w-full px-6 py-12 md:py-16 bg-[#f8f9fa] flex justify-center border-y border-gray-200">
                  <a href="tel:010-8129-4477" className="block w-full max-w-[500px] relative overflow-hidden rounded-lg shadow-[0_8px_30px_rgb(0,0,0,0.12)] bg-[#1E2F3F] text-white hover:scale-105 transition-transform duration-300 group">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-[#FB6719]/10 rounded-full transform translate-x-10 -translate-y-10 group-hover:scale-110 transition-transform"></div>
                    <div className="absolute bottom-0 left-0 w-24 h-24 bg-[#FB6719]/10 rounded-full transform -translate-x-8 translate-y-8"></div>

                    <div className="relative p-6 md:p-8 flex flex-col items-center text-center">
                      <span className="inline-block px-3 py-1 bg-white/10 rounded-full text-xs font-medium tracking-widest text-[#FB6719] mb-4">
                        PREMIUM APARTMENT
                      </span>
                      <h3 className="text-xl md:text-2xl font-light mb-1">e편한세상 서울산 <span className="font-bold">파크그란데</span></h3>
                      <p className="text-lg font-medium text-white/80 mb-6 tracking-wide">로얄층 특별 분양 상담</p>

                      <div className="flex items-center justify-center gap-2 bg-[#FB6719] text-white px-6 py-3 rounded-full font-bold shadow-md group-hover:bg-[#e05410] transition-colors">
                        <Phone className="w-4 h-4" />
                        빠른 상담 연결
                        <ArrowRight className="w-4 h-4 ml-1 opacity-70 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </a>
                </div>
              );
            }

            // 일반 이미지 섹션
            // SEO 최적화를 위한 alt 태그 처리 (id 기반 분기)
            let altText = "e편한세상 서울산 파크그란데 분양 상세 이미지";
            if (idx === 0) altText = "e편한세상 서울산 파크그란데 조감도";
            if (idx === 1) altText = "e편한세상 서울산 파크그란데 단지설계 및 스카이라운지";
            if (idx === 2) altText = "e편한세상 서울산 파크그란데 모델하우스 및 위치 안내";
            if (idx === 4) altText = "울산 남구 아파트 e편한세상 서울산 파크그란데 입지 프리미엄";
            if (idx === 8) altText = "e편한세상 서울산 파크그란데 광역교통망 및 환경";

            return (
              <div key={`block-${idx}`} className={`w-full bg-white relative block ${idx === 1 ? 'pt-6 md:pt-10' : ''}`}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={block.src}
                  alt={altText}
                  className="w-full h-auto block m-0 p-0 shadow-sm"
                  loading={idx > 4 ? "lazy" : "eager"}
                />
              </div>
            );
          })}
        </div>
      </main>

      {/* Footer 코퍼레이트 정보 */}
      <footer className="w-full bg-white border-t border-gray-200 flex flex-col items-center pb-28 md:pb-36 relative z-10">

        {/* 파트너스 배너 */}
        <div className="w-full bg-[#202428] flex justify-center py-3.5 md:py-5 border-b border-[#2c333a]">
          <div className="w-full max-w-6xl px-4 flex flex-row flex-wrap items-center justify-center gap-x-5 md:gap-x-10 gap-y-2">
            <div className="flex items-center">
              <span className="text-[#a1a1aa] mr-2 text-[12px] md:text-[14px]">시행</span>
              <span className="text-white font-[900] tracking-tight flex items-center text-[15px] md:text-lg">
                <span className="text-xl md:text-2xl mr-1 leading-none inline-block text-white/90" style={{ transform: 'translateY(-1px)' }}>❁</span>
                우리자산신탁(주)
              </span>
            </div>
            <div className="flex items-center">
              <span className="text-[#a1a1aa] mr-3 text-[12px] md:text-[14px]">시공</span>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/dl_logo.png" alt="DL건설 로고" className="h-6 md:h-8 w-auto mix-blend-screen opacity-90" />
            </div>
          </div>
        </div>

        <div className="w-full max-w-[768px] px-6 text-[11px] md:text-xs leading-[1.8] break-keep pt-10 md:pt-14 text-gray-500">
          <p className="font-bold text-gray-900 text-sm mb-1">홈페이지 및 파워링크 제작문의</p>
          <p className="font-medium text-gray-700 mb-6">카톡 아이디: als1502 (tel. 010-7929-4212)</p>

          <div className="space-y-1 text-gray-400">
            <p>※ 본 사이트에 사용된 CG 및 이미지 등은 소비자의 이해를 돕기 위해 제작된 것으로 실제와 다를 수 있습니다.</p>
            <p>※ 사업지 인근의 개발사업과 관련된 사항은 지자체, 개발주체 및 관계기관의 사정에 따라 변경될 수 있습니다.</p>
            <p>※ 제작, 편집, 인쇄과정상 오탈자 등의 오류가 있을 수 있으니, 계약 전 반드시 견본주택 관계자에게 문의하시기 바랍니다.</p>
            <p>※ 본 사이트상의 일러스트 및 이미지는 소비자의 이해를 돕기 위한 것으로 실제와 다를 수 있습니다.</p>
            <p>※ 본 사이트의 개발계획, 교통계획, 학교계획 등은 소비자의 이해를 돕기 위한 것으로, 관계기관의 계획변경 등에 따라 달라질 수 있으며, 이는 당사와 무관합니다.</p>
          </div>
        </div>
      </footer>

      {/* 
        최하단 모바일 고정 유동바 (CTA) - 번호 제거 및 신뢰도 있는 문구로 수정
      */}
      <div className="fixed bottom-0 left-0 right-0 z-[60] flex justify-center pointer-events-none">
        <div className="w-full max-w-[768px] flex pointer-events-auto bg-white shadow-[0_-5px_20px_rgba(0,0,0,0.15)] h-[60px] md:h-[70px]">
          <a
            href="tel:010-8129-4477"
            className="flex-1 bg-white text-[#1E2F3F] flex items-center justify-center font-bold text-lg md:text-xl active:bg-gray-50 transition border-r border-[#1E2F3F]/10"
          >
            <Phone className="w-4 h-4 md:w-5 md:h-5 mr-2" />
            분양 상담
          </a>
          <a
            href="#contact-bottom"
            className="flex-1 bg-[#FB6719] text-white flex items-center justify-center font-bold text-lg md:text-xl active:bg-[#e05410] transition"
          >
            잔여세대 상담
          </a>
        </div>
      </div>

    </div>
  );
}
