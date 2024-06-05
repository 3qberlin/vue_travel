<template>
  <div class="container mt-4">
    <h3 class="mb-3">旅行條件設定</h3>
    <v-form v-slot="{ errors }" class="mb-4">
      <div class="row g-12">
        <div class="col- col-lg-4">
          <div class="p-2">
            <label for="startDate" class="text-muted mb-0 w-100">
              <span class="text-danger"
                >*
                <span style="color: black" class="py-2 d-inline-block"
                  >出發日</span
                ></span
              >
              <v-field
                name="出發日"
                type="date"
                rules="required"
                class="form-control w-100"
                id="startDate"
                placeholder="2022-01-01"
                v-model="startTime"
                :class="{ 'is-invalid': errors['出發日'] }"
                @change="getStart"
              >
              </v-field>
            </label>
            <ErrorMessage class="text-danger" name="出發日" />
          </div>
        </div>
        <div class="col- col-lg-4">
          <div class="p-2">
            <label for="endDate" class="text-muted mb-0 w-100">
              <span class="text-danger"
                >*
                <span style="color: black" class="py-2 d-inline-block"
                  >回程</span
                ></span
              >
              <v-field
                name="回程"
                type="date"
                rules="required"
                class="form-control w-100"
                id="endDate"
                placeholder="2022-01-01"
                v-model="endTime"
                :class="{ 'is-invalid': errors['回程'] }"
                @change="getEnd"
              >
              </v-field>
            </label>
            <ErrorMessage class="text-danger" name="回程" />
          </div>
        </div>
        <div class="col- col-lg-4">
          <div class="p-2">
            <label for="people" class="text-muted mb-0 w-100">
              <span class="text-danger"
                >*
                <span style="color: black" class="py-2 d-inline-block"
                  >人數：孩童視為成人，以一位計算</span
                ></span
              >
              <v-field
                as="select"
                name="人數"
                type="select"
                rules="required"
                class="form-control w-100"
                id="people"
                placeholder="暫不接受所有寵物入住"
                v-model="selectedPeople"
                :class="{ 'is-invalid': errors['人數'] }"
                @blur.prevent="setPeople($event.target.value)"
              >
                <option v-for="i in 10" :key="i" :value="i">{{ i }}</option>
              </v-field>
            </label>
            <ErrorMessage class="text-danger" name="人數" />
          </div>
        </div>
      </div>
    </v-form>
  </div>
</template>

<script>
import { mapActions, mapState } from 'pinia';

import travelConditionsPinia from '@/stores/travelConditionsPinia';

export default {
  methods: {
    ...mapActions(travelConditionsPinia, ['setPeople', 'getStart', 'getEnd']),
  },
  computed: {
    ...mapState(travelConditionsPinia, [
      'selectedPeople',
      'startTime',
      'endTime',
    ]),
  },
};
</script>
