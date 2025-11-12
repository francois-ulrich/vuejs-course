import type { Component } from "vue";

export interface GeneralSettings {
  username: string;
  email: string;
  aboutMe: string;
  gender: string;
  country: string;
}

export interface NotificationsSettings {
  email: boolean;
  sms: boolean;
}

export interface PrivacySettings {
  searchEngineIndexing: boolean;
  visibility: PrivacyVisibility;
}

export interface Tab {
  name: string;
  label: string;
  component: Component;
}

export type PrivacyVisibility = "Private" | "Public";

export interface SettingsMap {
  generalSettings: GeneralSettings;
  notificationsSettings: NotificationsSettings;
  privacySettings: PrivacySettings;
}

export type SettingsKey = keyof SettingsMap;
