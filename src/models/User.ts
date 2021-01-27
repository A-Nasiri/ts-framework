import { Eventing } from "./Eventing";
import { Sync } from "./Sync";
import { Attributes } from "./Attributes";

export interface UserProps {
  id: number;
  name: string;
  age: number;
}

const rootUrl = "http://localhost:3000/users";

export class User {
  public events: Eventing = new Eventing();
  public sync: Sync<UserProps> = new Sync<UserProps>(rootUrl);
  public attributes: Attributes<Partial<UserProps>>;

  constructor(attrs: Partial<UserProps>) {
    this.attributes = new Attributes<Partial<UserProps>>(attrs);
  }

  get on() {
    return this.events.on;
  }

  get trigger() {
    return this.events.trigger;
  }

  get get() {
    return this.attributes.get;
  }

  set(update: Partial<UserProps>): void {
    this.attributes.set(update);
    this.events.trigger("change");
  }
}
