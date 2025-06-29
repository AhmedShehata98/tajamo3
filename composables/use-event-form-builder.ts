import type { Reactive } from "vue";
import type { Event } from "~/types/events";
import { AudienceType, LocationType, EventType } from "~/types/events";

const useEventFormBuilder = () => {
  const eventFormBuilder = new EventFormBuilder();

  return eventFormBuilder;
};

export default useEventFormBuilder;

class EventFormBuilder {
  private _form: Reactive<Omit<Event, "id" | "updated_at" | "created_by">>;
  private _formBlurred: Reactive<Record<string, boolean>>;

  constructor() {
    this._form = reactive({
      name: "",
      image: "",
      description: "",
      start_at: "",
      end_at: "",
      event_type: EventType.EVENT,
      capacity: 0,
      location: "",
      location_type: LocationType.OFFLINE,
      company_id: null,
      audience: AudienceType.PUBLIC,
      created_at: new Date().toISOString(),
    });
    this._formBlurred = reactive<Record<string, boolean>>({});
  }

  setName(name: string) {
    this._form.name = name;
    return this;
  }
  setImage(image: string) {
    this._form.image = image;
    return this;
  }
  setDescription(description: string) {
    this._form.description = description;
    return this;
  }
  setStartDate(startDate: string) {
    this._form.start_at = startDate;
    return this;
  }
  setEndDate(endDate: string) {
    this._form.end_at = endDate;
    return this;
  }
  setEventType(eventType: EventType) {
    this._form.event_type = eventType;
    return this;
  }
  setCapacity(capacity: number) {
    this._form.capacity = capacity;
    return this;
  }
  setLocation(location: string) {
    this._form.location = location;
    return this;
  }
  setLocationType(locationType: LocationType) {
    this._form.location_type = locationType;
    return this;
  }
  setAudienceType(audienceType: AudienceType) {
    this._form.audience = audienceType;
    return this;
  }
  setCompanyId(companyId: number) {
    this._form.company_id = companyId;
    return this;
  }
  setFormBlurred(field: string, value: boolean) {
    this._formBlurred[field] = value;
    return this;
  }
  resetForm() {
    this._form = {
      name: "",
      image: "",
      description: "",
      start_at: "",
      end_at: "",
      event_type: EventType.EVENT,
      capacity: 0,
      location: "",
      location_type: LocationType.OFFLINE,
      company_id: null,
      audience: AudienceType.PUBLIC,
      created_by: 0,
      price: 0,
    };
    return this;
  }
  resetFormBlurred() {
    this._formBlurred = {};
    return this;
  }
  resetFormAndFormBlurred() {
    this.resetForm();
    this.resetFormBlurred();
    return this;
  }

  buildForm(): {
    formData: FormData;
    data: Omit<Event, "id" | "created_at" | "updated_at">;
  } {
    if (!this._form.name) {
      throw new Error("Event name is required");
    }
    if (!this._form.start_at) {
      throw new Error("Event start date is required");
    }
    if (!this._form.end_at) {
      throw new Error("Event end date is required");
    }
    if (this._form.start_at >= this._form.end_at) {
      throw new Error("Event end date must be after start date");
    }
    if (this._form.capacity < 0) {
      throw new Error("Event capacity cannot be negative");
    }
    if (
      this._form.location_type === LocationType.OFFLINE &&
      !this._form.location
    ) {
      throw new Error("Event location is required for offline events");
    }
    if (!this._form.event_type) {
      throw new Error("Event type is required");
    }
    if (!this._form.image) {
      throw new Error("Event image is required");
    }
    if (this._form.price < 0) {
      throw new Error("Event price cannot be negative");
    }
    const formData = new FormData();
    (Object.keys(this._form) as Array<keyof typeof this._form>).forEach(
      (key) => {
        // Convert value to string for FormData
        const value =
          this._form[key] !== null && this._form[key] !== undefined
            ? this._form[key]
            : "";
        formData.append(key, value as string);
      }
    );
    return { formData, data: this._form };
  }
}
