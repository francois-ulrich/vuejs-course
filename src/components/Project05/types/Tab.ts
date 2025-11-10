import type { Component } from "vue";

export interface Tab {
  name: string;
  label: string;
  component: Component;
}
