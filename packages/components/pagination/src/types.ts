import { Component } from "vue";

export interface PageinationComponent {
  name: string;
  bind: object;
  component: Component;
  eventName: string;
  event: Function;
}
