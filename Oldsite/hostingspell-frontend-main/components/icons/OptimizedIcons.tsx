"use client";

import dynamic from "next/dynamic";
import { ComponentType } from "react";
import { IconBaseProps } from "react-icons";

// Lazy load icon sets with loading fallback
const FiCheck = dynamic(() => import("react-icons/fi").then((mod) => mod.FiCheck), {
  loading: () => <span className="inline-block w-4 h-4" />,
  ssr: false,
});

const FiSearch = dynamic(() => import("react-icons/fi").then((mod) => mod.FiSearch), {
  loading: () => <span className="inline-block w-4 h-4" />,
  ssr: false,
});

const FiArrowRight = dynamic(() => import("react-icons/fi").then((mod) => mod.FiArrowRight), {
  loading: () => <span className="inline-block w-4 h-4" />,
  ssr: false,
});

const FiPercent = dynamic(() => import("react-icons/fi").then((mod) => mod.FiPercent), {
  loading: () => <span className="inline-block w-4 h-4" />,
  ssr: false,
});

const FiStar = dynamic(() => import("react-icons/fi").then((mod) => mod.FiStar), {
  loading: () => <span className="inline-block w-4 h-4" />,
  ssr: false,
});

const FaTwitter = dynamic(() => import("react-icons/fa").then((mod) => mod.FaTwitter), {
  loading: () => <span className="inline-block w-4 h-4" />,
  ssr: false,
});

const FaFacebook = dynamic(() => import("react-icons/fa").then((mod) => mod.FaFacebook), {
  loading: () => <span className="inline-block w-4 h-4" />,
  ssr: false,
});

const FaInstagram = dynamic(() => import("react-icons/fa").then((mod) => mod.FaInstagram), {
  loading: () => <span className="inline-block w-4 h-4" />,
  ssr: false,
});

const FaDiscord = dynamic(() => import("react-icons/fa").then((mod) => mod.FaDiscord), {
  loading: () => <span className="inline-block w-4 h-4" />,
  ssr: false,
});

export {
  FiCheck,
  FiSearch,
  FiArrowRight,
  FiPercent,
  FiStar,
  FaTwitter,
  FaFacebook,
  FaInstagram,
  FaDiscord,
};
